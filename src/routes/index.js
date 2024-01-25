const express = require("express");
const { UserRoute } = require("../modules/users/user.route");
const { ShopRoute } = require("../modules/shops/shop.route");
const { ParcelRoute } = require("../modules/parcels/parcel.route");
const { InvoiceRoute } = require("../modules/invoices/invoice.route");

const router = express.Router();

// user routes
router.use("/users", UserRoute);

// shop routes
router.use("/shops", ShopRoute);

// parcel routes
router.use("/parcels", ParcelRoute);

// payment routes
router.use("/payment", InvoiceRoute);

module.exports = router;
