const mongoose = require("mongoose");

const ParcelSchema = new mongoose.Schema({
  parcelId: {
    type: String,
    required: [true, "Parcel ID is required"],
    unique: true,
  },
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
  description: { type: String },
  parcelWeight: { type: String, required: true },
  parcelQuantity: { type: String, required: true },
  shippingMethod: { type: String, required: true },
  parcelStatus: { type: String, required: true },
  deliveryDateTime: { type: String, required: true },

  merchantInfo: {
    type: {
      merchantId: String,
      merchantName: String,
      shopName: String,
      contactNumber: String,
      email: String,
      address: {
        type: {
          division: String,
          district: String,
          address: String,
        },
      },
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
