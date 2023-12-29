const InvoiceModel = require("./payment.model");

// Database Query for get all invoices
const getAllInvoices = async () => {
  const invoices = await InvoiceModel.find();
  return invoices;
};

module.exports.PaymentService = {
  getAllInvoices,
};
