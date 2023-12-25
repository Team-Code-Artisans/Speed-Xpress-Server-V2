const express = require("express");
const { UserRoute } = require("../modules/users/user.route");
const { ParcelRoute } = require("../modules/parcels/parcel.route");
const { PaymentRoute } = require("../modules/payments/payment.route");

const router = express.Router();

// user routes
router.use("/users", UserRoute);

// parcel routes
router.use("/parcels", ParcelRoute);

// payment routes
router.use("/payment", PaymentRoute);

module.exports = router;
