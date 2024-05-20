const nodemailer = require("nodemailer");
// const path = require('node:path');
require('dotenv').config()


const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  //port: 465,
  secure: false,
  auth: {
    user: process.env.USER_MAIL,
    pass: process.env.USER_PASSWORD,
  },
});

// const sendMail = async ({ to, from, subject, text, attachments }) => {
  
const sendMail = async (message) => {

  try {
    const info = await transporter.sendMail({
      from:'stefi.automation.test@gmail.com',
      to: 'stefani.kiprevska@gmail.com',
      subject: 'Report',
      text: message,
      // attachments: attachments,
    });

    console.log("Email sent: %s", info);
    return info;
  } catch (error) {
    console.error("Error sending email:", error);
    return error;
  }
};

module.exports = sendMail
