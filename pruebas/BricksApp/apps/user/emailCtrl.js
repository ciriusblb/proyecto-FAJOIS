'use strict';
var nodemailer = require('nodemailer');
var sendEmail = function(email, callback){

  var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: email,
        pass: 'El5-mejo'
    }
  });

  var codigo = Math.round(Math.random()*100000);
  var codigo = codigo.toString();
  var mailOptions = {
    from: 'Remitente',
    to: email,
    subject: 'Asunto',
    text: codigo
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error){
        callback(null,undefined);
    } else {
        callback(null,mailOptions);
    }
  });
};

module.exports=sendEmail;




// var nodemailer = require('nodemailer');

// exports.sendEmail = function(email, callback){

// var transporter = nodemailer.createTransport({
//     host: 'smtp.gmail.com',
//     port: 465,
//     secure: true, // use SSL
//     auth: {
//         user: email,
//         pass: 'El5-mejo'
//     }
// });

// // setup e-mail data
// var mailOptions = {
//     from: '"Our Code World " <myemail@gmail.com>', // sender address (who sends)
//     to: email, // list of receivers (who receives)
//     subject: 'Hello', // Subject line
//     text: 'Hello world ', // plaintext body
//     html: '<b>Hello world </b><br> This is the first email sent with Nodemailer in Node.js' // html body
// };

// // send mail with defined transport object
// transporter.sendMail(mailOptions, function(error, info){
//     if(error){
//         console.log(error);
//     }else{
//     // console.log('Message sent: ' + info.response);
//      console.log("Email sent ",mailOptions.text);
//         callback(null,mailOptions);
//     }
// });

// };