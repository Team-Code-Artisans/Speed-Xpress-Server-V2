const express = require("express");
const { ParcelController } = require("./parcel.controller");

const router = express.Router();

// create a parcel route
router.post("/create-parcel", ParcelController.createParcel);

// get all parcel route
router.get("/all-parcel", ParcelController.getAllParcel);

// get parcel by id route
router.get("/:id", ParcelController.getParcelByID);

// get parcels by email route
router.get("/", ParcelController.getParcelsByEmail);

module.exports.ParcelRoute = router;
