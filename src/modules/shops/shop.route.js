const express = require("express");
const verifyJWT = require("../../utilities/verifyJWT");
const { ShopController } = require("./shop.controller");

const router = express.Router();

// create a shop route -
router.post("/create-shop", ShopController.createShop);

module.exports.ShopRoute = router;
