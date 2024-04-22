/*const nodemailer = require("nodemailer");
const path = require ('node:path');
const dotenv = require('dotenv');




dotenv.config();


const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: true, 
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});


async function main() {
  const { emailContent } = require('./node_modules/cypress-email-results/index.js');
  const info = await transporter.sendMail({
    from: '"Hi Marija" <stefi.automation.test@gmail.com>', 
    to: "stefani.kiprevska@gmail.com", 
    subject: "Report", 
    text: emailContent,
     
    attachments: [
        {   
            filename: 'mochawesome.html',
            path: __dirname + '/mochawesome.html'
            
        }
     ]
  });

  console.log("Message sent: %s", info.messageId);
  
}

main().catch(console.error);
module.exports = transporter;*/
