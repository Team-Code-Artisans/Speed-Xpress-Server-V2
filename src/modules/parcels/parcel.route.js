const express = require("express");
const { ParcelController } = require("./parcel.controller");

const router = express.Router();

// create a parcel
router.post("/create-parcel", ParcelController.createParcel);

// get all parcel
router.get("/all-parcel", ParcelController.getAllParcel);

// get parcel by email
router.get("/");

module.exports.ParcelRoute = router;
