const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a name."],
    minLength: [3, "Name must be at least 3 characters."],
    maxLength: [20, "Name is too long."],
  },
  email: {
    type: String,
    required: [true, "Please provide a email address."],
    trim: true, // without spaces
    unique: [true, "Please provide a unique email address."],
    validate: {
      validator: () => {
        Promise.resolve(false);
      },
      message: "Email validation failed",
    },
  },
  photoURL: {
    type: String,
  },
  number: {
    type: String,
  },
  division: {
    type: String,
  },
  district: {
    type: String,
  },
  address: {
    type: String,
  },
  role: {
    type: String,
    required: true,
  },
  merchantInfo: {
    merchantId: { type: String },
    shopName: { type: String },
  },
});

const UserModel = mongoose.model("users", userSchema);

module.exports = UserModel;
