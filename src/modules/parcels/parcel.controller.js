const { ParcelService } = require("./parcel.service");

// API controller for insert a new parcel
const createParcel = async (req, res) => {
  try {
    const result = await ParcelService.createParcel(req.body);

    res.status(200).json({
      status: "success",
      message: "Parcel successfully created",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Failed to create Parcel",
      error: error.message,
    });
  }
};

// API controller for get all parcels
const getAllParcel = async (req, res) => {
  try {
    const result = await ParcelService.getAllParcel();

    res.status(200).json({
      status: "success",
      message: "Get all Parcels succeed!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
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

    res.status(200).json({
      status: "success",
      message: "Get parcel info by succeed!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Failed to get Parcel info by ID",
      error: error.message,
    });
  }
};

module.exports.ParcelController = {
  createParcel,
  getAllParcel,
  getParcelByID,
};
