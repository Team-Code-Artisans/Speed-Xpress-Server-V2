const express = require("express");
const { ParcelController } = require("./parcel.controller");

const router = express.Router();

// create a parcel route
router.post("/create-parcel", ParcelController.createParcel);

// get all parcel route
router.get("/all-parcel", ParcelController.getAllParcel);

// get parcel by email route
router.get("/");

module.exports.ParcelRoute = router;
