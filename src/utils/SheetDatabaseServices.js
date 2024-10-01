import axios from 'axios';
import format from 'date-fns/format';

export const createSheetData = async (url,userData) => {
    const responseTimeAndDate = {
        "receive date": format(new Date(), 'MM/dd/yyyy'),
        "receive time": format(new Date(Date.now()), "h':'m':'s")
    }
    console.log()
    const data = { ...userData, ...responseTimeAndDate };
    try {
        const res = await axios.post(url,
            data
        );
        if (!res) {
            throw new Error("Data not fetch");
        }
        // console.log(res);
    } catch (err) {
        // console.log(err);
    }
}

export const getUserData = async () => {
    try {
        const res = await axios.get('https://sheetdb.io/api/v1/oi9euhfsovfj1');
        if (!res) {
            throw new Error("Data not fetch");
        }
        console.log(res);
    } catch (err) {
        console.log(err);
    }
}

