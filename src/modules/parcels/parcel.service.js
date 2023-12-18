const ParcelModel = require("./parcel.model");
const generateParcelID = require("../../utilities/generateParcelID");

// Database Query for insert a new parcel
const createParcel = async (payload) => {
  let parcelId = generateParcelID(6);

  const isExist = await ParcelModel.findOne({ parcelId: parcelId });

  if (!isExist) {
    const result = await ParcelModel.create({ parcelId, ...payload });
    return result;
  } else {
    parcelId = generateParcelID(6);
    const result = await ParcelModel.create({ parcelId, ...payload });
    return result;
  }
};

// Database Query for get all parcels
const getAllParcel = async () => {
  const result = await ParcelModel.find();
  return result;
};

// Database Query for update a parcel by ID

module.exports.ParcelService = {
  createParcel,
  getAllParcel,
};
