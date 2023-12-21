const mongoose = require("mongoose");

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

  // <updatable>
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
  // different API method
  parcelStatus: { type: String, required: true },
  // </updatable>
  deliveryDateTime: { type: String, required: true },

  merchantInfo: {
    merchantId: { type: String },
    merchantName: { type: String },
    shopName: { type: String },
    contactNumber: { type: String },
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

/*
 senderInfo: {
    type: {
      name: String,
      email: String,
      number: String,
      address: {
        type: {
          division: String,
          district: String,
          address: String,
        },
        required: true,
      },
    },
    required: true,
  },
  recipientInfo: {
    type: {
      name: String,
      email: String,
      number: String,
      address: {
        type: {
          division: String,
          district: String,
          address: String,
        },
        required: true,
      },
    },
    required: true,
  },
  parcelWeight: {
    type: String,
    required: true,
  },
  parcelQuantity: {
    type: String,
    required: true,
  },
  deliveryOption: {
    type: String,
    required: true,
  },
  paymentMethod: {
    type: String,
    required: true,
  },
  parcelStatus: {
    type: String,
    required: true,
  },
  deliveryDateTime: {
    type: String,
    required: true,
  },
  merchantInfo: {
    type: {
      merchantId: String,
      merchantName: String,
      shopName: String,
      contactNumber: String,
      email: String,
      address: String,
    },
  },
  paymentInfo: {
    type: {
      status: {
        type: String,
        required: true,
      },
      amount: {
        type: Number,
        required: true,
      },
    },
    required: true,
  },
*/
