const nodemailer = require("nodemailer");
const fs = require('fs');
require('dotenv').config()

const transport = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    // port: 465,
    secure: false, //true,
    service: 'gmail',
    auth: {
      user: process.env.USER_MAIL,
      pass: process.env.USER_PASSWORD,
    },
  });

module.exports = transport