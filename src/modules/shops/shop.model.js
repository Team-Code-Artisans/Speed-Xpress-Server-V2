const mongoose = require("mongoose");

// shop schema
const ShopSchema = new mongoose.Schema({
  shopId: {
    type: String,
    required: [true, "Shop ID is required"],
    unique: true,
  },
  name: { type: String, required: true },
  email: { type: String, required: true },
  number: { type: String, required: true },
  address: {
    division: { type: String, required: true },
    district: { type: String, required: true },
    address: { type: String, required: true },
  },
  merchantId: { type: String, required: true },
  merchantEmail: { type: String, required: true },
});

const ShopModel = mongoose.model("shops", ShopSchema);

module.exports = ShopModel;
