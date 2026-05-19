const Mailgen = require("mailgen");

const createTemplate = (mailBody) => {
  const mailGenerator = new Mailgen({
    theme: "default",
    product: {
      name: "Speed Xpress",
      link: process.env.CLIENT_URL || "http://localhost:3000",
    },
  });

  return mailGenerator.generate(mailBody);
};

module.exports = createTemplate;
