const express = require("express");
const { UserRoute } = require("../modules/users/user.route");
const { ParcelRoute } = require("../modules/parcels/parcel.route");

const router = express.Router();

// user routes
router.use("/user", UserRoute);

// parcel routes
router.use("/parcel", ParcelRoute);

module.exports = router;
