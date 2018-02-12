'use strict';
const nodemailer = require('nodemailer');
const config = require('./config')

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    service: 'Gmail',
    // port: 587,
    // secure: false, // true for 465, false for other ports
    auth: {
        user: config.username, // generated ethereal user
        pass: config.password  // generated ethereal password
    }
});

// setup email data with unicode symbols
let mailOptions = {
    from: '"NodeMailer 👻" <bennodemailertest@gmail.com>', // sender address
    to: 'nby08339@zamge.com', // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Hello world?', // plain text body
    html: '<b>Hello world?</b>' // html body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
    // Preview only available when sending through an Ethereal account
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
});