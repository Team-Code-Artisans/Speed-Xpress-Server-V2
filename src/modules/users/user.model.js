const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
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
});

const User = mongoose.model("User", userSchema);
module.exports = User;
