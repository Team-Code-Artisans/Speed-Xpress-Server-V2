const mongoose = require("mongoose");

const invoiceSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
  parcelId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "parcels",
    required: true,
  },
  amount: { type: Number, required: true },
  currency: { type: String, required: true },
  paymentMethod: { type: String, required: true },
  paymentIntentId: { type: String, required: true },
  status: { type: String, required: true },
  paymentDateTime: { type: String, required: true },
});

const InvoiceModel = mongoose.model("invoices", invoiceSchema);

module.exports = InvoiceModel;
