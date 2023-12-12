const { ParcelModel } = require("./parcel.model");

// insert a new parcel
const createParcel = async (payload) => {
  const result = await ParcelModel.create(payload);
  return result;
};

// get all parcels
const getAllParcel = async () => {
  const result = await ParcelModel.find();
  return result;
};

module.exports.ParcelService = {
  createParcel,
  getAllParcel,
};
