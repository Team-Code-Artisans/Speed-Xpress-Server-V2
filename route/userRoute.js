const express = require("express");
const router = express.Router();
const {
  allUsers,
  saveUser,
  singleUser,
  updateUser,
  deleteUser,
} = require("../controller/userController");

router.route("/").get(allUsers).post(saveUser);
router.route("/:email").get(singleUser).put(updateUser).delete(deleteUser);

module.exports = router;
