const nodemailer = require("nodemailer");
const Mailgen = require("mailgen");

const sendMail = async (req, res) => {
  const senderEmail = req.body.email;
  const name = req.body.name;

  const config = {
    service: "gmail",
    auth: {
      user: process.env.GMAIL_APP,
      pass: process.env.GMAIL_APP_PASS,
    },
  };

  const transporter = await nodemailer.createTransport(config);

  const mailGenerator = new Mailgen({
    theme: "default",
    product: {
      name: "Speed Xpress",
      link: "https://speed-xpress-v2.vercel.app/",
    },
  });

  const email = {
    body: {
      name: name,
      intro: "Your parcel has been create successfully.",
      table: {
        data: [
          {
            item: "Node.js",
            description:
              "Event-driven I/O server-side JavaScript environment based on V8.",
            price: "$10.99",
          },
        ],
        columns: {
          // Optionally, customize the column widths
          customWidth: {
            item: "20%",
            price: "15%",
          },
          // Optionally, change column text alignment
          customAlignment: {
            price: "right",
          },
        },
      },
      action: {
        instructions:
          "You can check the parcel status of your parcel and more in your dashboard:",
        button: {
          color: "#3869D4",
          text: "Go to Dashboard",
          link: "https://speed-xpress-v2.vercel.app/",
        },
      },
      outro: "We thank you for your purchase.",
    },
  };

  const mail = mailGenerator.generate(email);

  const mailInfo = {
    from: "teamcodeartisans@gmail.com",
    to: senderEmail,
    subject: "Your Parcel Has Submitted.",
    html: mail,
  };

  transporter
    .sendMail(mailInfo)
    .then(() => {
      return res.status(200).json({
        message: "mail has been sent",
      });
    })
    .catch((err) => {
      return res.status(500).json({ err });
    });
};

module.exports = sendMail;
