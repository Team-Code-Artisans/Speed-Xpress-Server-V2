const express = require("express");
const { UserRoute } = require("../modules/users/user.route");

const router = express.Router();

// user routes
router.use("/user", UserRoute);

module.exports = router;
