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

// get invoice by invoiceId route -
router.get("/invoice/:id", verifyJWT, InvoiceController.getInvoiceById);

// get invoices by email route -
router.get("/invoice", verifyJWT, InvoiceController.getInvoicesByEmail);

// update payment status by _id route -
router.put(
  "/update-status/:id",
  verifyJWT,
  InvoiceController.updatePaymentStatusById
);

// delete invoice by _id route -
router.delete("/:id", verifyJWT, InvoiceController.deleteInvoiceById);

module.exports.InvoiceRoute = router;
