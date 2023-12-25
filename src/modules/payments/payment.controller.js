const InvoiceModel = require("./payment.model");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const createPayment = async (req, res) => {
  try {
    const { amount, parcelId, userId, status, paymentDateTime } = req.body;

    // Create a new Payment Intent
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "usd",
    });

    // Save invoice
    await InvoiceModel.create({
      userId,
      parcelId,
      amount,
      status,
      paymentDateTime,
      currency: "usd",
      paymentMethod: "card",
      paymentIntentId: paymentIntent.id,
    });

    // Send the Payment Intent ID to the client
    res.status(200).json({ clientSecret: paymentIntent.client_secret });
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
