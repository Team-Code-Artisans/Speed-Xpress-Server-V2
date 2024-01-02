const InvoiceModel = require("./invoice.model");

// Database Query for create invoice offline
const createInvoice = async (payload) => {
  const result = await InvoiceModel.create(payload);
  return result;
};

// Database Query for get all invoices
const getAllInvoices = async () => {
  const invoices = await InvoiceModel.find();
  return invoices;
};

// Database Query for get invoice by ID
const getInvoiceById = async (id) => {
  const result = await InvoiceModel.findOne({ invoiceId: id });
  return result;
};

// Database Query for get invoices by email address
const getInvoicesByEmail = async (email) => {
  const userEmail = { userEmail: email };
  const result = await ParcelModel.find(userEmail);
  return result;
};

// Database Query for update payment status by _id
const updatePaymentStatusById = async (id, updatedParcel, option) => {
  const result = await InvoiceModel.findByIdAndUpdate(
    id,
    updatedParcel,
    option
  );
  return result;
};

// Database Query for delete invoice by _id
const deleteInvoiceById = async (id) => {
  const result = await InvoiceModel.findByIdAndDelete(id);
  return result;
};

module.exports.InvoiceService = {
  createInvoice,
  getAllInvoices,
  getInvoiceById,
  getInvoicesByEmail,
  updatePaymentStatusById,
  deleteInvoiceById,
};
