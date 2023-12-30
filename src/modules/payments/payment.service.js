const InvoiceModel = require("./payment.model");

// Database Query for get all invoices
const getAllInvoices = async () => {
  const invoices = await InvoiceModel.find();
  return invoices;
};

// Database Query for update payment status by ID
const updatePaymentStatusById = async (id, updatedParcel, option) => {
  const result = await InvoiceModel.findByIdAndUpdate(
    id,
    updatedParcel,
    option
  );
  return result;
};

module.exports.PaymentService = {
  getAllInvoices,
  updatePaymentStatusById,
};
