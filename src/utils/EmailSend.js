import emailjs from "@emailjs/browser"

const sendEmailHandler = async(subject, data) => {
    await emailjs.send(
        'service_l74xhul',
        'template_y0nv6mi',
        data,
        {
            publicKey: "a4JU-dzwEADZgnq1K"
        }
    )
        .then((res) => {
            // console.log(res.text);
            // console.log("Email send");
            // toast.success("Email Send.")
        })
        .catch((error) => {
            console.log(error);
            // console.log("Email sent failed");
        })

    // const config = {
    //     SecureToken : "1b7f15d6-9046-4434-b688-13de03f3f201",
    //     To: 'paxdata@jetsetterss.com',
    //     From: data.email,
    //     Subject: "User Data",
    //     Body: "Hello",
    // }
    // const config = {
    //     Host : "smtp.gmail.com",
    //     Username : "akashk61530@gmail.com",
    //     Password : "password",
    //     To : 'akashk61530@gmail.com',
    //     From : data.email,
    //     Subject : "This is the subject",
    //     Body : "Hello"
    // }

    // if (window.Email) {
    //     window.Email.send(config).then((res) => console.log("Email send", res));
    // }
}

export default sendEmailHandler;