const { ShopService } = require("./shop.service");

// API controller for create a shop -
const createShop = async (req, res) => {
  try {
    //  const decoded = req.decoded;

    //  if (!decoded.role === "merchant") {
    //    return res
    //      .status(403)
    //      .send("Forbidden access to create shop for the given email address");
    //  }

    const result = await ShopService.createShop(req.body);

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({
      message: "Failed to create Shop",
      error: error.message,
    });
  }
};

// API controller for get all shop information for admin users
const getAllShops = async (req, res) => {
  try {
    // const decoded = req.decoded;

    // if (decoded.role !== "admin") {
    //   return res.status(403).send("Forbidden access to get all shop information");
    // }

    const result = await ShopService.getAllShops();

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({
      message: "Failed to get all shop information",
      error: error.message,
    });
  }
};

// API controller for get shop information by shopId
const getShopById = async (req, res) => {
  try {
    const shopId = req.params.id;

    const result = await ShopService.getShopById(shopId);

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({
      message: "Failed to get shop information by shopId",
      error: error.message,
    });
  }
};

// API controller for get shop information by email address
const getShopByEmail = async (req, res) => {
  try {
    const email = req.query.email;
    // const decoded = req.decoded;

    // if (!decoded.email) {
    //   return res
    //     .status(403)
    //     .send("Forbidden access to parcels for the given email");
    // }

    const result = await ShopService.getShopByEmail(email);

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({
      message: "Failed to get shop information by email address",
      error: error.message,
    });
  }
};

module.exports.ShopController = {
  createShop,
  getAllShops,
  getShopById,
  getShopByEmail,
};
