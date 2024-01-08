const { ShopService } = require("./shop.service");

// API controller for create a shop -
const createShop = async (req, res) => {
  try {
    const decoded = req.decoded;

    if (!decoded.role === "merchant") {
      return res
        .status(403)
        .send("Forbidden access to create shop for the given email address");
    }

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
    const decoded = req.decoded;

    if (decoded.role !== "admin") {
      return res
        .status(403)
        .send("Forbidden access to get all shop information");
    }

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

    if (result?.length === 0) {
      res.status(404).json({
        message: "No Shop found for the given shopId",
        data: [],
      });
    } else {
      res.status(200).json(result);
    }

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
    const decoded = req.decoded;

    if (!decoded.email) {
      return res
        .status(403)
        .send("Forbidden access to parcels for the given email");
    }

    const result = await ShopService.getShopByEmail(email);

    if (result?.length === 0) {
      res.status(404).json({
        message: "No Shop found for the given email",
        data: [],
      });
    } else {
      res.status(200).json(result);
    }

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({
      message: "Failed to get shop information by email address",
      error: error.message,
    });
  }
};

// API controller for update Shop info by _id
const updateShopInfoById = async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const decoded = req.decoded;

    if (!decoded.email) {
      return res
        .status(403)
        .send("Forbidden access to update parcel info for the given id");
    }

    const option = { new: true };
    const updatedData = {
      $set: {
        name: data.name,
        email: data.email,
        number: data.number,
        address: {
          ...data.address,
        },
      },
    };

    const result = await ShopService.updateShopInfoById(
      id,
      updatedData,
      option
    );

    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({
      message: "Failed to updating Shop info by id",
      error: error.message,
    });
  }
};

// API controller for delete parcel by _id
const deleteShopById = async (req, res) => {
  try {
    const id = req.params.id;
    const decoded = req.decoded;

    if (decoded.role !== "admin") {
      return res
        .status(403)
        .send("Forbidden access to delete shop for the given id");
    }

    const result = await ShopService.deleteShopById(id);

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete shop by id",
      error: error.message,
    });
  }
};

module.exports.ShopController = {
  createShop,
  getAllShops,
  getShopById,
  getShopByEmail,
  updateShopInfoById,
  deleteShopById,
};
