const { uid } = require("uid");
const { InvoiceService } = require("./invoice.service");
const InvoiceModel = require("./invoice.model");
const stripe = require("stripe")(
  "sk_test_51OSLT1IXagZEAtaHcFE4XOS2Nrj9jhwM7TqiQxdMgKFt2DUHb0nBZzy8odAQF4phRHWd9zOphuOiJfC4Dh4hyzZT000vqNz2wJ"
);

// API controller for get make payment online -
const createPayment = async (req, res) => {
  try {
    const data = req.body;

    const decoded = req.decoded;
    if (decoded.email !== data.userEmail) {
      return res
        .status(403)
        .send("Forbidden access to make payment for the given email");
    }

    // Create a payment checkout
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "Parcel",
            },
            unit_amount: data.amount * 100,
          },
          quantity: 1,
        },
      ],
      customer_email: data.userEmail,
      mode: "payment",
      payment_method_types: ["card"],
      success_url: `${process.env.CLIENT_URL}/dashboard/${data.userRole}/parcels`,
      cancel_url: `${process.env.CLIENT_URL}/dashboard/${data.userRole}/parcels`,
    });

    // Create invoice ID
    let invoiceId = `SXINVOICE${uid(6).toUpperCase()}`;
    const isExist = await InvoiceModel.findOne({ invoiceId });

    if (!isExist) {
      // Save invoice
      await InvoiceModel.create({
        ...data,
        invoiceId,
        currency: "usd",
        paymentId: session ? session.id : uid(`test_${30}`),
      });

      // Send the Payment Session url to the client
      res.status(200).json({ url: session.url });
    } else {
      invoiceId = `SXINVOICE${uid(6).toUpperCase()}`;
      // Save invoice
      await InvoiceModel.create({
        ...data,
        invoiceId,
        currency: "usd",
        paymentId: session ? session.id : uid(`test_${30}`),
      });

      // Send the Payment Session url to the client
      res.status(200).json({ url: session.url });
    }
  } catch (error) {
    res.status(500).json({
      message: "Failed to create Payment intent",
      error: error.message,
    });
  }
};

// API controller for get make payment online -

// API controller for get all invoices
const getAllInvoices = async (req, res) => {
  try {
    const decoded = req.decoded;

    if (decoded.role !== "admin") {
      return res.status(403).send("Forbidden access to get all invoices");
    }

    const result = await InvoiceService.getAllInvoices();

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({
      message: "Failed to get all invoices",
      error: error.message,
    });
  }
};

// API controller for get invoice by ID
const getInvoiceById = async (req, res) => {
  try {
    const id = req.params.id;

    const result = await InvoiceService.getInvoiceById(id);

    if (result.length === 0) {
      res.status(404).json({
        message: "No invoice found for the given invoiceId",
        data: [],
      });
    } else {
      res.status(200).json(result);
    }
  } catch (error) {
    res.status(500).json({
      message: "Failed to get invoice info by ID",
      error: error.message,
    });
  }
};

// API controller for get invoices by email address
const getInvoicesByEmail = async (req, res) => {
  try {
    const email = req.query.email;
    // const decoded = req.decoded;

    // if (!decoded.email) {
    //   return res
    //     .status(403)
    //     .send("Forbidden access to parcels for the given email");
    // }

    const result = await InvoiceService.getInvoicesByEmail(email);

    if (result.length === 0) {
      res.status(404).json({
        message: "No invoices found for the given email",
        data: [],
      });
    } else {
      res.status(200).json(result);
    }
  } catch (error) {
    res.status(500).json({
      message: "Failed to get invoices by email",
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

    const result = await InvoiceService.updatePaymentStatusById(
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

module.exports.InvoiceController = {
  createPayment,
  getAllInvoices,
  getInvoiceById,
  getInvoicesByEmail,
  updatePaymentStatusById,
};
