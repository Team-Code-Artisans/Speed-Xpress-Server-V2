const express = require("express");
const verifyJWT = require("../../utilities/JWT/verifyJWT");
const { ShopController } = require("./shop.controller");

const router = express.Router();

// create a shop route -
router.post("/create-shop", verifyJWT, ShopController.createShop);

// get all shop info route -
router.get("/all-shop", verifyJWT, ShopController.getAllShops);

// get shop info by shopId route -
router.get("/:id", ShopController.getShopById);

// get shops by email route -
router.get("/", verifyJWT, ShopController.getShopByEmail);

// update shop info by _id route -
router.put("/update-shop/:id", verifyJWT, ShopController.updateShopInfoById);

// delete shop info by _id route -
router.delete("/:id", verifyJWT, ShopController.deleteShopById);

module.exports.ShopRoute = router;
