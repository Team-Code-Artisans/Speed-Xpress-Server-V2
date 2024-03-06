const { UserService } = require("./user.service");

// API controller for insert a new user
const createUser = async (req, res) => {
  try {
    const result = await UserService.createUser(req.body);

    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({
      message: "Failed to insert User Data",
      error: error.message,
    });
  }
};

// API controller for get all users
const getAllUsers = async (req, res) => {
  try {
    const result = await UserService.getAllUsers();

    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({
      message: "Failed to get all user data",
      error: error.message,
    });
  }
};

// API controller for get user by email
const getUserByEmail = async (req, res) => {
  try {
    const email = req.query.email;

    if (!email) {
      res.status(404).json({
        message: "Please Provide a email",
      });
    } else {
      const result = await UserService.getUserByEmail(email);

      res.status(200).json(result);
    }
  } catch (error) {
    res.status(400).json({
      message: "Failed to get user data by email",
      error: error.message,
    });
  }
};

// API controller for get user by id
const getUserById = async (req, res) => {
  try {
    const id = req.params.id;

    if (!id) {
      res.status(404).json({
        message: "Please Provide a valid user id",
      });
    } else {
      const result = await UserService.getUserById(id);

      res.status(200).json(result);
    }
  } catch (error) {
    res.status(400).json({
      message: "Failed to get user data by id",
      error: error.message,
    });
  }
};

// API controller for update user info by _id
const updateUserInfoById = async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;

    const option = { new: true };
    const updatedData = {
      $set: {
        name: data.name,
        number: data.number,
        division: data.division,
        district: data.district,
        address: data.address,
      },
    };
    const result = await UserService.updateUserInfoById(
      id,
      updatedData,
      option
    );

    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({
      message: "Failed to updating user info by ID",
      error: error.message,
    });
  }
};

// API controller for delete a user by _id
const deleteUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await UserService.deleteUserById(id);

    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({
      message: "Failed to deleting user by id",
      error: error.message,
    });
  }
};

module.exports.UserController = {
  createUser,
  getAllUsers,
  getUserByEmail,
  getUserById,
  updateUserInfoById,
  deleteUserById,
};
