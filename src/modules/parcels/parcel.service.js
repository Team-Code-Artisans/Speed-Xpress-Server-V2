const { ParcelModel } = require("./parcel.model");

// Database Query for insert a new parcel
const createParcel = async (payload) => {
  const result = await ParcelModel.create(payload);
  return result;
};

// Database Query for get all parcels
const getAllParcel = async () => {
  const result = await ParcelModel.find();
  return result;
};

module.exports.ParcelService = {
  createParcel,
  getAllParcel,
};
