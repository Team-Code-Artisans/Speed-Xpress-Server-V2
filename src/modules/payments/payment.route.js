const express = require("express");
const verifyJWT = require("../../utilities/verifyJWT");
const { PaymentController } = require("./payment.controller");

const router = express.Router();

// make payment route -
router.post("/", verifyJWT, PaymentController.createPayment);

// get all invoices for admin account route -
router.get("/all-invoices", verifyJWT, PaymentController.getAllInvoices);

module.exports.PaymentRoute = router;
