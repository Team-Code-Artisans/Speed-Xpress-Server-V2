const express = require("express");
const { UserController } = require("./user.controller");

const router = express.Router();

// create a user route
router.post("/create-user", UserController.createUser);

// get all users route
router.get("/all-users", UserController.getAllUsers);

// get user by email route
router.get("/", UserController.getUserByEmail);

// get user by id route
router.get("/:id", UserController.getUserById);

// update user by _id route
router.put("/update-user/:id", UserController.updateUserInfoById);

// delete user by _id route
router.delete("/:id", UserController.deleteUserById);

module.exports.UserRoute = router;
