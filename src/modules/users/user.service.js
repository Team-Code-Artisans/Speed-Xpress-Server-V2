const UserModel = require("./user.model");

const createUser = async (payload) => {
  const result = await UserModel.create(payload);
  return result;
};

const getAllUsers = async () => {
  const result = await UserModel.find();
  return result;
};

const getUserByEmail = async (email) => {
  const user = { email: email };
  const result = await UserModel.findOne(user);
  return result;
};

module.exports.UserService = {
  createUser,
  getAllUsers,
  getUserByEmail,
};
