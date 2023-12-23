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

// Database Query for get all parcels -
const getAllParcel = async () => {
  const result = await ParcelModel.find();
  return result;
};

// Database Query for get parcel by ID -
const getParcelById = async (id) => {
  const parcelId = { parcelId: id };
  const result = await ParcelModel.findOne(parcelId);
  return result;
};

// Database Query for get parcels by email
const getParcelsByEmail = async (email) => {
  const senderEmail = { "senderInfo.email": email };
  const result = await ParcelModel.find(senderEmail);
  return result;
};

// Database Query for update parcel info by ID
const updateParcelInfoById = async (id, updatedParcel, option) => {
  const result = await ParcelModel.findByIdAndUpdate(id, updatedParcel, option);
  return result;
};

// Database Query for update parcel status by ID
const updateParcelStatusById = async (id, updatedParcel, option) => {
  const result = await ParcelModel.findByIdAndUpdate(id, updatedParcel, option);
  return result;
};

// Database Query for delete a parcel by ID
const deleteParcelById = async (id) => {
  const result = await ParcelModel.findOneAndDelete(id);
  return result;
};

module.exports.ParcelService = {
  createParcel,
  getAllParcel,
  getParcelById,
  getParcelsByEmail,
  updateParcelInfoById,
  updateParcelStatusById,
  deleteParcelById,
};
