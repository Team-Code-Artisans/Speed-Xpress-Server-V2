const createTemplate = require("./templete");
const createTransporter = require("./transporter");

const sendMailer = async (parcelInfo) => {
  try {
    const data = parcelInfo;
    let {
      parcelId,
      shippingMethod,
      parcelStatus,
      deliveryDateTime,
      paymentInfo: { amount, method, status },
      senderInfo,
      recipientInfo: { name, email, number, address },
    } = data;
    const [date, time] = deliveryDateTime.split(", ");
    name = name
      .split(/\s+/) // Split by one or more spaces
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

    const statusDisplay =
      parcelStatus.charAt(0).toUpperCase() + parcelStatus.slice(1);

    const mailBody = {
      body: {
        name: senderInfo.name,
        intro: `Your parcel has been ${statusDisplay}.`,
        table: {
          data: [
            {
              "Parcel Info": `ID: <b>${parcelId}</b>`,
              "Recipient Info": `Name: <b>${name}</b>`,
            },
            {
              "Parcel Info": `Date: <b>${date}</b>`,
              "Recipient Info": `Phone: <b>${number}</b>`,
            },
            {
              "Parcel Info": `Time: <b>${time}</b>`,
              "Recipient Info": `District: <b>${address.district}</b>`,
            },
            {
              "Parcel Info": `Method: <b>${shippingMethod.toUpperCase()}</b>`,
              "Recipient Info": `Address: <b>${address.address}</b>`,
            },
            {
              "Parcel Info": `Payment: <b>${method.toUpperCase()}</b>`,
            },
            {
              "Parcel Info": `Status: <b>${status.toUpperCase()}</b>`,
            },
            {
              "Parcel Info": `Amount: <b>৳ ${amount}</b>`,
            },
          ],
          columns: {
            customWidth: {
              "Parcel Info": "50%",
              "Recipient Info": "50%",
            },
          },
        },
        action: {
          instructions:
            "Track your parcel in real-time from your dashboard.",
          button: {
            color: "#3b82f6",
            text: "Track Your Parcel",
            link: `${process.env.CLIENT_URL}/parcels/${parcelId}`,
          },
        },
        outro:
          "Need help? Reply to this email. Thanks for choosing Speed Xpress.",
      },
    };

    const mail = createTemplate(mailBody);

    const mailInfo = {
      from: `"Speed Xpress" <${process.env.GMAIL_APP}>`,
      to: [senderInfo.email, email],
      cc: process.env.GMAIL_APP,
      subject: `Speed Xpress Parcel - Your Parcel Has Been ${
        parcelStatus.charAt(0).toUpperCase() + parcelStatus.slice(1)
      }.`,
      html: mail,
    };

    const transporter = await createTransporter();

    await transporter.sendMail(mailInfo);

    return {
      success: true,
      message: "Email has been sent",
    };
  } catch (error) {
    console.log(error);
    return { success: false, message: "Failed to send email." };
  }
};
module.exports = sendMailer;
