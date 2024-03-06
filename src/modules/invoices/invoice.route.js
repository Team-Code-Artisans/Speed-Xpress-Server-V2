const express = require("express");
const { InvoiceController } = require("./invoice.controller");

const router = express.Router();

// make payment route -
router.post("/", InvoiceController.createPayment);

// create invoice offline route -
router.post("/create-invoice", InvoiceController.createInvoice);

// get all invoices for admin account route -
router.get("/all-invoices", InvoiceController.getAllInvoices);

// get invoice by invoiceId route -
router.get("/invoice/:id", InvoiceController.getInvoiceById);

// get invoices by email route -
router.get("/invoice", InvoiceController.getInvoicesByEmail);

// update payment status by _id in invoice and parcel info route -
router.put("/update-status/:id", InvoiceController.updatePaymentStatusById);

// delete invoice by _id route -
router.delete("/:id", InvoiceController.deleteInvoiceById);

module.exports.InvoiceRoute = router;
