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

    const mailBody = {
      body: {
        name: senderInfo.name,
        intro: `Your parcel Has Been ${
          parcelStatus.charAt(0).toUpperCase() + parcelStatus.slice(1)
        }.`,
        table: {
          data: [
            {
              "PARCEL INFO": `ID: <b>${parcelId}</b>`,
              "RECEIPT INFO": `NAME: <b>${name}</b>`,
            },
            {
              "PARCEL INFO": `DATE: <b>${date}</b>`,
              "RECEIPT INFO": `NUMBER: <b>${number}</b>`,
            },
            {
              "PARCEL INFO": `TIME: <b>${time}</b>`,
              "RECEIPT INFO": `DISTRICT: <b>${address.district}</b>`,
            },
            {
              "PARCEL INFO": `STATUS: <b>${parcelStatus.toUpperCase()}</b>`,
              "RECEIPT INFO": `ADDRESS: <b>${address.address}`,
            },
            {
              "PARCEL INFO": `SHIPPING METHOD: <b>${shippingMethod.toUpperCase()}</b>`,
            },
            { "PARCEL INFO": `PAYMENT METHOD: <b>${method.toUpperCase()}</b>` },
            { "PARCEL INFO": `PAYMENT STATUS: <b>${status.toUpperCase()}</b>` },
            { "PARCEL INFO": `AMOUNT: <b>${amount}</b>` },
          ],
          columns: {
            // Optionally, customize the column widths
            customWidth: {
              "PARCEL INFO": "50%",
              "RECEIPT INFO": "50%",
            },
          },
        },
        action: {
          instructions:
            "You can check the parcel status of your parcel and more in your dashboard.",
          button: {
            color: "#3b82f6",
            text: "Track Your Parcel",
            link: `https://speed-xpress-v2.vercel.app/parcles/${parcelId}`,
          },
        },
        outro: "We thank you for your purchase.",
      },
    };

    const mail = createTemplate(mailBody);

    const mailInfo = {
      from: "teamcodeartisans@gmail.com",
      to: senderInfo.email,
      cc: email,
      subject: `Your Parcel Has Been ${
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
