const mongoose = require("mongoose");

const parcelSchema = new mongoose.Schema({
  customerInfo: {
    name: {
      type: String,
      required: [true, "Please provide customer name."],
    },
    email: {
      type: String,
      required: [true, "Please provide a email address."],
      trim: true, // without spaces
      validate: {
        validator: () => {
          Promise.resolve(false);
        },
        message: "Email validation failed",
      },
    },
    number: {
      type: String,
      required: true,
    },
    division: {
      type: String,
      required: true,
    },
    district: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    merchantEmail: {
      type: String,
      trim: true, // without spaces
      validate: {
        validator: () => {
          Promise.resolve(false);
        },
        message: "Email validation failed",
      },
    },
    merchantName: { type: String },
  },
  weight: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  TotalChargedAmount: {
    type: Number,
    required: true,
  },
  deliveryFee: {
    type: Number,
    required: true,
  },
  senderEmail: {
    type: String,
    required: true,
  },
  paid: { type: Boolean },
  status: { type: String },
});

const ParcelModel = mongoose.model("parcels", parcelSchema);

module.exports = ParcelModel;
