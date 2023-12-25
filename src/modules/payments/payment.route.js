const express = require("express");
const { createPayment } = require("./payment.controller");
const router = express.Router();

router.post("/", createPayment);

module.exports.PaymentRoute = router;
