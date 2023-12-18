const UserModel = require("./user.model");

// Database Query for insert a new user
const createUser = async (payload) => {
  const { email } = payload;
  const isExist = await UserModel.findOne({ email: email });
  // console.log(isExist);

  if (!isExist) {
    const result = await UserModel.create(payload);
    return result;
  }
  return isExist;
};

// Database Query for get all users
const getAllUsers = async () => {
  const result = await UserModel.find();
  return result;
};

// Database Query for get user by email
const getUserByEmail = async (email) => {
  const user = { email: email };
  const result = await UserModel.findOne(user);
  return result;
};

// Database Query for user info update by ID
const updateUserInfoById = async (id, updatedData, option) => {
  const result = await UserModel.findByIdAndUpdate(id, updatedData, option);
  return result;
};

// Database Query for delete a user by ID
const deleteUserById = async (id) => {
  const result = await UserModel.findByIdAndDelete(id);
  return result;
};

module.exports.UserService = {
  createUser,
  getAllUsers,
  getUserByEmail,
  updateUserInfoById,
  deleteUserById,
};
