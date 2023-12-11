const { UserService } = require("./user.service");

const createUser = async (req, res) => {
  try {
    const result = await UserService.createUser(req.body);

    res.status(200).json({
      status: "success",
      message: "User Data inserted Successfully!",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: "Failed to insert User Data",
      error: error.message,
    });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const result = await UserService.getAllUsers();

    res.status(200).json({
      status: "success",
      message: "Get All User Data Successfully!",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: "Failed to get all user data",
      error: error.message,
    });
  }
};

const getUserByEmail = async (req, res) => {
  try {
    const email = req.query.email;
    const result = await UserService.getUserByEmail(email);

    res.status(200).json({
      status: "success",
      message: "Get User Data by email Successfully!",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: "Failed to get user data by email",
      error: error.message,
    });
  }
};

module.exports.UserController = {
  createUser,
  getAllUsers,
  getUserByEmail,
};

// const asyncHandler = require("express-async-handler");
// const Error = require("http-errors");
// const User = require("./user.model");

// // save the user
// const saveUser = asyncHandler(async (req, res) => {
//   const { name, email } = req.body;

//   if (!name || !email) {
//     throw Error("Please fill all the fields");
//   }

//   const user = await User.create({
//     name,
//     email,
//     number: "",
//     division: "",
//     district: "",
//     address: "",
//   });

//   res.status(201).json(user);
// });

// // get all users
// const allUsers = asyncHandler(async (req, res) => {
//   const users = await User.find();

//   if (!users) {
//     throw Error(404, "Users not found");
//   }

//   res.status(200).json(users);
// });

// // get user by email
// const singleUser = asyncHandler(async (req, res) => {
//   const user = await User.findOne({ email: req.params.email });

//   if (!user) {
//     throw Error(404, "User not found");
//   }

//   res.status(200).json(user);
// });

// // update user info
// const updateUser = asyncHandler(async (req, res) => {
//   const { name, number, division, district, address } = req.body;

//   if (!name) {
//     throw Error(400, "Please fill all the fields");
//   }

//   const user = User.findOneAndUpdate(
//     {
//       email: req.params.email,
//     },
//     {
//       name,
//       number,
//       division,
//       district,
//       address,
//     },
//     {
//       new: true,
//       runValidators: true,
//     }
//   );

//   if (!user) {
//     throw Error(404, "User not found");
//   }

//   res.status(200).json(user);
// });

// // delete user
// const deleteUser = asyncHandler(async (req, res) => {
//   const user = await User.findOne({ email: req.params.email });

//   if (!user) {
//     throw Error(404, "User not found");
//   }

//   await user.deleteOne();

//   res.status(200).json(user);
// });

// module.exports = {
//   singleUser,
//   allUsers,
//   saveUser,
//   updateUser,
//   deleteUser,
// };
