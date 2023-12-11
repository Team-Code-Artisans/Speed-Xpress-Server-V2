const express = require("express");
const { UserRoute } = require("../modules/users/user.route");

const router = express.Router();

// user routes
router.use("/users", UserRoute);

module.exports = router;
