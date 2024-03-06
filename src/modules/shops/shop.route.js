const express = require("express");
const { ShopController } = require("./shop.controller");

const router = express.Router();

// create a shop route -
router.post("/create-shop", ShopController.createShop);

// get all shop info route -
router.get("/all-shop", ShopController.getAllShops);

// get shop info by shopId route -
router.get("/:id", ShopController.getShopById);

// get shops by email route -
router.get("/", ShopController.getShopByEmail);

// update shop info by _id route -
router.put("/update-shop/:id", ShopController.updateShopInfoById);

// delete shop info by _id route -
router.delete("/:id", ShopController.deleteShopById);

module.exports.ShopRoute = router;
