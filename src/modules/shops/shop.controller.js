const { ShopService } = require("./shop.service");

// API controller for create a shop -
const createShop = async (req, res) => {
  try {
    //  const decoded = req.decoded;

    //  if (decoded.email !== undefined) {
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

module.exports.ShopController = {
  createShop,
};
