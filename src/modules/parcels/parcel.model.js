const mongoose = require("mongoose");

const ParcelSchema = new mongoose.Schema({
  parcelId: {
    type: String,
    required: [true, "Parcel ID is required"],
    unique: true,
  },
  senderInfo: {
    name: { type: String, required: [true, "Please provide sender name"] },
    number: { type: String, required: true },
    address: {
      type: String,
      required: [true, "Please provide sender address"],
    },
  },
  recipientInfo: {
    name: { type: String, required: [true, "Please provide Recipient name"] },
    number: { type: String, required: true },
    address: {
      type: String,
      required: [true, "Please provide Recipient address"],
    },
  },
  description: { type: String },
  parcelWeight: { type: Number, required: true },
  parcelStatus: { type: String, required: true },
  deliveryDateTime: { type: Date, required: true },
  shippingMethod: { type: String, required: true },
  deliveryLocation: { type: String, required: true },
  merchantInfo: {
    merchantId: { type: String },
    merchantName: { type: String },
    shopName: { type: String },
    contactNumber: { type: String },
    email: { type: String },
    address: { type: String },
  },
  paymentInfo: {
    status: { type: String, required: true },
    amount: { type: Number, required: true },
  },
});

const ParcelModel = mongoose.model("parcels", ParcelSchema);

module.exports = ParcelModel;

/*
enum Status {
  Pending = "pending",
  Accepted = "accepted",
  Picked = "picked",
  Delivered = "delivered",
}

enum PaymentStatus {
  Pending = "pending",
  Paid = "paid",
}

type SenderInfo = {
  name: string;
  number: string;
  address: string;
};

type RecipientInfo = {
  name: string;
  number: string;
  address: string;
};

type MerchantInfo = {
  merchantId: string;
  merchantName: string;
  shopName: string;
  contactNumber: string;
  email: string;
  address: string;
};
type Parcel = {
  parcelId: string;
  senderInfo: SenderInfo;
  recipientInfo: RecipientInfo;
  parcelWeight: number;
  status: Status;
  deliveryDateTime: Date;
  shippingMethod: string;
  deliveryLocation: string;
  merchantInfo?: MerchantInfo;

  paymentInfo: {
    status: PaymentStatus;
    amount: number;
  };
};
*/
