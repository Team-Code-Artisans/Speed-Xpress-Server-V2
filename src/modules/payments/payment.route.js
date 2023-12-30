const express = require("express");
const verifyJWT = require("../../utilities/verifyJWT");
const { PaymentController } = require("./payment.controller");

const router = express.Router();

// make payment route -
router.post("/", verifyJWT, PaymentController.createPayment);

// get all invoices for admin account route -
router.get("/all-invoices", verifyJWT, PaymentController.getAllInvoices);

// update payment status by ID route -
router.put(
  "/update-status/:id",
  verifyJWT,
  PaymentController.updatePaymentStatusById
);

module.exports.PaymentRoute = router;
