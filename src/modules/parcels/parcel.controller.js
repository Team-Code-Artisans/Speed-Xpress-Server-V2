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
      message: "Get all Parcels successfully",
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

module.exports.ParcelController = {
  createParcel,
  getAllParcel,
};
