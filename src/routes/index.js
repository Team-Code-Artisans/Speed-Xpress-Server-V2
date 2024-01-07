const express = require("express");
const getJwtToken = require("../utilities/JWT/getJwtToken");
const { UserRoute } = require("../modules/users/user.route");
const { ShopRoute } = require("../modules/shops/shop.route");
const { ParcelRoute } = require("../modules/parcels/parcel.route");
const { InvoiceRoute } = require("../modules/invoices/invoice.route");

const router = express.Router();

// get JWT token
router.post("/jwt", getJwtToken);

// user routes
router.use("/users", UserRoute);

// shop routes
router.use("/shops", ShopRoute);

// parcel routes
router.use("/parcels", ParcelRoute);

// payment routes
router.use("/payment", InvoiceRoute);

module.exports = router;
