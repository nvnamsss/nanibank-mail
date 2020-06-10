var nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'tangkiemthusinh@gmail.com',
        pass: 'ufvzyqzwayeopcyg'
    }
})

function send(to, title, content, html) {
    var message = {
        from: "tangkiemthusinh@gmail.com",
        to: to,
        subject: title,
        text: content,
        html: html
    };

    transporter.sendMail(message, (err, info) => {
        if (err) {
            throw err;
        }

        console.log(info);
    })

}

module.exports = transporter;