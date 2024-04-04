const nodemailer = require("nodemailer");
const path = require ('node:path');


const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, 
  auth: {
    user: "stefi.automation.test@gmail.com",
    pass: "dmyr tkls aitp aagf",
  },
});


async function main() {
  
  const info = await transporter.sendMail({
    from: '"Hi Marija" <stefi.automation.test@gmail.com>', 
    to: "stefani.kiprevska@gmail.com", 
    subject: "Mochawesome report", 
    text: "Html report",
     
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