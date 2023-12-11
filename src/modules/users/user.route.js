const express = require("express");
const { UserController } = require("./user.controller");

const router = express.Router();

// create a user
router.post("/create-user", UserController.createUser);

// get all users
router.get("/all-users", UserController.getAllUsers);

// get user by email
router.get("/", UserController.getUserByEmail);

module.exports.UserRoute = router;
