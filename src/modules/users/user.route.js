const express = require("express");
const { UserController } = require("./user.controller");
const verifyJWT = require("../../utilities/verifyJWT");

const router = express.Router();

// create a user route
router.post("/create-user", UserController.createUser);

// get all users route
router.get("/all-users", verifyJWT, UserController.getAllUsers);

// get user by email route
router.get("/", verifyJWT, UserController.getUserByEmail);

// update user by ID route
router.put("/update-user/:id", verifyJWT, UserController.updateUserInfoById);

// delete user by ID route
router.delete("/:id", verifyJWT, UserController.deleteUserById);

module.exports.UserRoute = router;
