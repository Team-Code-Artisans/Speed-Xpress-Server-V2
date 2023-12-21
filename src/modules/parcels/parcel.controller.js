const { response } = require("express");
const { ParcelService } = require("./parcel.service");

// API controller for insert a new parcel
const createParcel = async (req, res) => {
  try {
    const result = await ParcelService.createParcel(req.body);

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({
      message: "Failed to create Parcel",
      error: error.message,
    });
  }
};

// API controller for get all parcels
const getAllParcel = async (req, res) => {
  try {
    const result = await ParcelService.getAllParcel();

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({
      message: "Failed to get all Parcel",
      error: error.message,
    });
  }
};

// API controller for get parcel data by ID
const getParcelByID = async (req, res) => {
  try {
    const parcelId = req.params.id;
    const result = await ParcelService.getParcelById(parcelId);

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({
      message: "Failed to get Parcel info by ID",
      error: error.message,
    });
  }
};

// API controller for get parcels by ID
const getParcelsByEmail = async (req, res) => {
  try {
    const email = req.query.email;
    const result = await ParcelService.getParcelsByEmail(email);

    if (result.length === 0) {
      res.status(404).json({
        message: "No parcels found for the given email",
        data: [],
      });
    } else {
      res.status(200).json(result);
    }
  } catch (error) {
    res.status(500).json({
      message: "Failed to get parcels by email",
      error: error.message,
    });
  }
};

// API controller for delete parcel by ID
const deleteParcelById = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await ParcelService.deleteParcelById(id);

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete parcel by ID",
      error: error.message,
    });
  }
};

module.exports.ParcelController = {
  createParcel,
  getAllParcel,
  getParcelByID,
  getParcelsByEmail,
  deleteParcelById,
};
