const sendEmail = require("../services/email.service");

const recipientEmail = "samopzz@gmail.com";
const recipientName = "Samson Adewumi";

sendEmail(recipientEmail, recipientName) // send email
  .then(() => console.log("Email sent successfully!"))
  .catch((err) => console.error("Failed to send email:", err));


