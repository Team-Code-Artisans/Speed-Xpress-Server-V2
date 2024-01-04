const nodemailer = require("nodemailer");

const createTransporter = () => {
  const config = {
    service: "gmail",
    auth: {
      user: process.env.GMAIL_APP,
      pass: process.env.GMAIL_APP_PASS,
    },
  };
  return nodemailer.createTransport(config);
};

module.exports = createTransporter;
