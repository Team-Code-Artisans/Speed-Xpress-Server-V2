const express = require("express");
const getJwtToken = require("../utilities/getJwtToken");
const { UserRoute } = require("../modules/users/user.route");
const { ParcelRoute } = require("../modules/parcels/parcel.route");
const { PaymentRoute } = require("../modules/payments/payment.route");
const verifyJWT = require("../utilities/verifyJWT");

const router = express.Router();

// get JWT token
router.post("/jwt", getJwtToken);

// user routes
router.use("/users", UserRoute);

// parcel routes
router.use("/parcels", verifyJWT, ParcelRoute);

// payment routes
router.use("/payment", verifyJWT, PaymentRoute);

module.exports = router;
