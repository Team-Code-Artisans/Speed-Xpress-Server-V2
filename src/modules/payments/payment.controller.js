const { uid } = require("uid");
const { PaymentService } = require("./payment.service");
const InvoiceModel = require("./payment.model");
const stripe = require("stripe")(
  "sk_test_51OSLT1IXagZEAtaHcFE4XOS2Nrj9jhwM7TqiQxdMgKFt2DUHb0nBZzy8odAQF4phRHWd9zOphuOiJfC4Dh4hyzZT000vqNz2wJ"
);

// API controller for get make payment -
const createPayment = async (req, res) => {
  try {
    const {
      amount,
      parcelId,
      userEmail,
      userName,
      userRole,
      status,
      paymentDateTime,
      paymentMethod,
    } = req.body;
    const decoded = req.decoded;

    if (decoded.email !== userEmail) {
      return res
        .status(403)
        .send("Forbidden access to make payment for the given email");
    }

    const price = amount * 100;

    // Create a payment checkout
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "Parcel",
            },
            unit_amount: price,
          },
          quantity: 1,
        },
      ],
      customer_email: userEmail,
      mode: "payment",
      payment_method_types: ["card"],
      success_url: `${process.env.CLIENT_URL}/dashboard/${userRole}/parcels`,
      cancel_url: `${process.env.CLIENT_URL}/dashboard/${userRole}/parcels`,
    });

    // Save invoice
    await InvoiceModel.create({
      userEmail,
      userName,
      userRole,
      parcelId,
      amount,
      status,
      paymentDateTime,
      paymentMethod,
      currency: "usd",
      paymentId: session ? session.id : uid(`test_${30}`),
    });

    // Send the Payment Session url to the client
    res.status(200).json({ url: session.url });
  } catch (error) {
    res.status(500).json({
      message: "Failed to create Payment intent",
      error: error.message,
    });
  }
};

// API controller for get all invoices
const getAllInvoices = async (req, res) => {
  try {
    const decoded = req.decoded;

    if (decoded.role !== "admin") {
      return res.status(403).send("Forbidden access to get all invoices");
    }

    const result = await PaymentService.getAllInvoices();

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({
      message: "Failed to get all invoices",
      error: error.message,
    });
  }
};

// API controller for update parcel info by id
const updatePaymentStatusById = async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;
    // const decoded = req.decoded;

    // if (!decoded.email) {
    //   return res
    //     .status(403)
    //     .send("Forbidden access to update parcel info for the given id");
    // }

    const option = { new: true };
    const updatedData = {
      $set: {
        status: data.status,
      },
    };

    const result = await PaymentService.updatePaymentStatusById(
      id,
      updatedData,
      option
    );

    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({
      message: "Failed to updating payment status by ID",
      error: error.message,
    });
  }
};

module.exports.PaymentController = {
  createPayment,
  getAllInvoices,
  updatePaymentStatusById,
};
