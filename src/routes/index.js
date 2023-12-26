const express = require("express");
const getJwtToken = require("../utilities/getJwtToken");
const { UserRoute } = require("../modules/users/user.route");
const { ParcelRoute } = require("../modules/parcels/parcel.route");
const { PaymentRoute } = require("../modules/payments/payment.route");

const router = express.Router();

// get JWT token
router.post("/jwt", getJwtToken);

// user routes
router.use("/users", UserRoute);

// parcel routes
router.use("/parcels", ParcelRoute);

// payment routes
router.use("/payment", PaymentRoute);

module.exports = router;
