const express = require("express");
const verifyJWT = require("../../utilities/verifyJWT");
const { InvoiceController } = require("./invoice.controller");

const router = express.Router();

// make payment route -
router.post("/", verifyJWT, InvoiceController.createPayment);

// create invoice offline route -
router.post("/create-invoice", verifyJWT, InvoiceController.createInvoice);

// get all invoices for admin account route -
router.get("/all-invoices", verifyJWT, InvoiceController.getAllInvoices);

// get invoice by Id route -
router.get("/invoice/:id", verifyJWT, InvoiceController.getInvoiceById);

// get invoices by email route -
router.get("/invoice", verifyJWT, InvoiceController.getInvoicesByEmail);

// update payment status by ID route -
router.put(
  "/update-status/:id",
  verifyJWT,
  InvoiceController.updatePaymentStatusById
);

module.exports.InvoiceRoute = router;
