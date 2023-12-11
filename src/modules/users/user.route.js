const express = require("express");
const {
  allUsers,
  saveUser,
  singleUser,
  updateUser,
  deleteUser,
} = require("./user.controller");
const router = express.Router();

router.route("/").get(allUsers).post(saveUser);
router.route("/:email").get(singleUser).put(updateUser).delete(deleteUser);

module.exports.UserRoute = router;
