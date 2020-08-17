var express = require('express');
var router = express.Router();
var mail = require('../mail');
var otp_mail = require('../otp_mail');

router.post('/register', function(req, res, next) {
    html = "<p> register </p>"
    title = "Register success";
    content = "Welcome to streetlity";
    receiver = req.body["receiver"];


    mail.send(receiver, title, content, html);
});

router.post('/reset-password', function(req, res, next) {
    html = "<p> reset passwrod </p>";    
    receiver = req.body["receiver"];
    resetUrl = req.body["reset-url"];
    tittle = "Reset password";
    content = "Please click this link to reset your password";

    mail.send(receiver, title, content, hmtl);
});

router.post('/test', function (req, res, next) {
    mail.send("nvnam.c@gmail.com", "hi mom", "hi mom i'm from nodemailer");

    res.status(200).send("send mail");
});

router.post('/otp', function(req, res) {
    let email = req.body["email"];
    let name = req.body["name"];
    let otp = req.body["otp"]; 
    
    otp_mail({
        email : email,
        name : name
    }, otp);

    res.status(200).send({
        "Status" : true,
        "Message" : "Email is sent"
    })
});

module.exports = router;