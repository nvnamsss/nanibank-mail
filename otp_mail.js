const transporter = require('./mail');
const handlerbars = require('handlebars');
const fs = require('fs');
const path = require('path');

async function send(info, otp) {
    let html = fs.readFileSync(path.join(__dirname, "public", "pages",'otp_mail.html')).toString();
    let template = handlerbars.compile(html);
    let data = {
        name: info.name,
        otp: otp
    };

    let result = template(data);
    let message = {
        from: "tangkiemthusinh@gmail.com",
        to: info.email,
        subject: "Nanibank Authentication",
        html: result
    };

    transporter.sendMail(message, (err, info) => {
        if (err) {
            throw err;
        }
        console.log("[Mail]", info);
    });
}

module.exports = send;