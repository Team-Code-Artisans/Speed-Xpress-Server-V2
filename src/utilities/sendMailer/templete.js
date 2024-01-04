const Mailgen = require("mailgen");

const createTemplate = (mailBody) => {
  const mailGenerator = new Mailgen({
    theme: "default",
    product: {
      name: "Speed Xpress",
      link: "https://speed-xpress-v2.vercel.app/",
    },
  });

  return mailGenerator.generate(mailBody);
};

module.exports = createTemplate;
