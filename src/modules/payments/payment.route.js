const express = require("express");
const { createPayment } = require("./payment.controller");
const router = express.Router();

router.post("/payment", createPayment);

module.exports.PaymentRoute = router;
