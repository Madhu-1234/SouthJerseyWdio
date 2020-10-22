const sgMail = require('@sendgrid/mail');
sgMail.setApiKey('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');
console.log('picked api key')
const fs = require("fs");

//pathToAttachment = `\TestReport.zip`;
//attachment = fs.readFileSync(pathToAttachment).toString("base64");

const msg = {
  to: ['madhu@shrisaitechnology.com', 'madhusmita.m12@gmail.com', 'AbdulKader.Lashkarwala@mottmac.com'],
  from: 'fbsupport@mottmac.com', // Use the email address or domain you verified above
  subject: 'SJG Automation test run results',
  text: 'Link to SJG Automation test run.',
  html: 'Automated test suite has been executed successfully and report has been uploaded to - <strong>https://confident-tereshkova-ea64c9.netlify.app/</strong>',
 
};



//...
sgMail
  .send(msg)
  .then(() => console.log('Mail sent successfully'))
  .catch(error => console.error(error.toString()));
   
