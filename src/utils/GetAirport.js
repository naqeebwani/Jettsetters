import axios from "axios";

export const getAirportListIataAndCIty = async (city,token) => {

    let list = []
    // console.log(city);
    try {
        // const res = await axios.get(`https://api.api-ninjas.com/v1/airports?iata=${iata}&city=${city}`,
        const res = await axios.get(`https://test.api.amadeus.com/v1/reference-data/locations?subType=CITY,AIRPORT&keyword=${city}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );
        if (!res || res.data.length <= 0 || !res.data.data) {
            throw new Error("Data not found")
        } else {
            // console.log(res);
            // list = { name: res.data[0]?.city, description: res.data[0]?.name }
            list = res.data?.data;
            // console.log("res", res);
            // console.log("list", list);
        }
    } catch (err) {
        if (err.response.data?.errors[0]?.title === "Access token expired") {
            const newToken = await getSearchAirportToken();
            sessionStorage.setItem('token', newToken);
            list = await getAirportListIataAndCIty(city, newToken);
        }
        // console.log(err);
    }
    return list;
}


export const getSearchAirportToken = async () => {
    try {
        const params = new URLSearchParams();
        params.append("client_id", "yRtwXaqOv1IAMW7O5k14y0Uso0rj0oJ1");
        params.append("client_secret", "T3jszh9RUQN6MTN6");
        params.append("grant_type", "client_credentials");

        const { data, status } = await axios.post('https://test.api.amadeus.com/v1/security/oauth2/token',
            params
        );
        if (!data || status !== 200) {
            throw new Error("Not found");
        } else {
            // console.log(data?.access_token)
            return data?.access_token;
        }
    } catch (err) {
        // console.log(err);
        return null;
    }
}