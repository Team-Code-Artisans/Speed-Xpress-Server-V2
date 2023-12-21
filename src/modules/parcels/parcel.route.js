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

// update parcel info by id route
router.put("/update/:id", ParcelController.updateParcelInfoById);

// update parcel status by id route
router.put("/update-status/:id", ParcelController.updateParcelStatusById);

// delete parcel by ID route
router.delete("/:id", ParcelController.deleteParcelById);

module.exports.ParcelRoute = router;
