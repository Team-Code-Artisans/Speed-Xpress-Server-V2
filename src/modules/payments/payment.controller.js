const InvoiceModel = require("./payment.model");
const stripe = require("stripe")(
  "sk_test_51OSLT1IXagZEAtaHcFE4XOS2Nrj9jhwM7TqiQxdMgKFt2DUHb0nBZzy8odAQF4phRHWd9zOphuOiJfC4Dh4hyzZT000vqNz2wJ"
);

const createPayment = async (req, res) => {
  try {
    let { amount, parcelId, userEmail, userRole, status, paymentDateTime } =
      req.body;
    amount = amount * 1000;

    // Create a payment checkout with the order amount and currency
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "Parcel",
            },
            unit_amount: amount,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      payment_method_types: ["card"],
      success_url: `${process.env.BaseUrl}/dashboard/${userRole}/parcels`,
      cancel_url: `${process.env.BaseUrl}/dashboard/${userRole}/parcels`,
    });

    // Save invoice
    await InvoiceModel.create({
      userEmail,
      userRole,
      parcelId,
      amount,
      status,
      paymentDateTime,
      currency: "usd",
      paymentMethod: "card",
      paymentIntentId: session.id,
    });

    // Send the Payment Session url to the client
    res.status(200).json({ clientSecret: session.url });
  } catch (error) {
    res.status(500).json({
      message: "Failed to create Payment intent",
      error: error.message,
    });
  }
};

module.exports = {
  createPayment,
};
