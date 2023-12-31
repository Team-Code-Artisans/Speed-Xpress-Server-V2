const mongoose = require("mongoose");

// parcel schema
const ParcelSchema = new mongoose.Schema({
  parcelId: {
    type: String,
    required: [true, "Parcel ID is required"],
    unique: true,
  },

  senderInfo: {
    name: { type: String },
    email: { type: String },
    number: { type: String },
    address: {
      division: { type: String },
      district: { type: String },
      address: { type: String },
    },
  },

  recipientInfo: {
    name: { type: String, required: true },
    email: { type: String, required: true },
    number: { type: String, required: true },
    address: {
      division: { type: String, required: true },
      district: { type: String, required: true },
      address: { type: String, required: true },
    },
  },

  parcelWeight: { type: String, required: true },
  parcelQuantity: { type: String, required: true },
  shippingMethod: { type: String, required: true },
  description: { type: String },
  parcelStatus: { type: String, required: true },
  deliveryDateTime: { type: String, required: true },

  merchantInfo: {
    merchantId: { type: String },
    ownerName: { type: String },
    shopName: { type: String },
    number: { type: String },
    email: { type: String },
    address: {
      division: { type: String },
      district: { type: String },
      address: { type: String },
    },
  },

  paymentInfo: {
    method: { type: String, required: true },
    status: { type: String, required: true },
    amount: { type: Number, required: true },
  },
});

const ParcelModel = mongoose.model("parcels", ParcelSchema);

module.exports = ParcelModel;
