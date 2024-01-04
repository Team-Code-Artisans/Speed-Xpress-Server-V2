const createTemplate = require("./templete");
const createTransporter = require("./transporter");

// const sendMail_ = async (mailInfo) => {
//   return transporter
//     .sendMail(mailInfo)
//     .then(() => res.send("mail has been sent"))
//     .catch((err) => res.status(500).json({ err }));
// };

const sendMail = async (req, res) => {
  const data = req.body;
  const senderEmail = data.senderInfo.email;
  const name = data.senderInfo.name;
  const parcelId = data.parcelId;
  const parcelStatus = data.parcelStatus;
  const amount = data.paymentInfo.amount;

  const mailBody = {
    body: {
      name: name,
      intro: "Your parcel has been create successfully.",
      table: {
        data: [
          {
            parcelId,
            parcelStatus,
            amount,
          },
        ],
        columns: {
          // Optionally, customize the column widths
          customWidth: {
            item: "20%",
            amount: "15%",
          },
          // Optionally, change column text alignment
          // customAlignment: {
          //   amount: "right",
          // },
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

  const mail = createTemplate(mailBody);

  const mailInfo = {
    from: "teamcodeartisans@gmail.com",
    to: senderEmail,
    subject: "Your Parcel Has Submitted.",
    html: mail,
  };

  const transporter = await createTransporter();

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
