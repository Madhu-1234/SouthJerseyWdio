module.exports = function sendMailFunc(){
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey('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');
console.log('picked api key')

const msg = {
  to: 'madhu@shrisaitechnology.com',
  from: 'madhusmita.m12@gmail.com', // Use the email address or domain you verified above
  subject: 'Sending with Twilio SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
};


//...
sgMail
  .send(msg)
  .then(() => console.log('Mail sent successfully'))
  .catch(error => console.error(error.toString()));
   
}