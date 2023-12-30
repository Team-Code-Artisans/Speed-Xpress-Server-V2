const { uid } = require("uid");
const ShopModel = require("./shop.model");

// Database Query for insert a new parcel
const createShop = async (payload) => {
  let shopId = `SX${uid(6)}`;

  const isExist = await ShopModel.findOne({ shopId: shopId });

  if (!isExist) {
    const result = await ShopModel.create({ shopId, ...payload });
    return result;
  } else {
    shopId = `SX${uid(6)}`;
    const result = await ShopModel.create({ shopId, ...payload });
    return result;
  }
};

// Database Query for get all shop information for admin users
const getAllShops = async () => {
  const result = await ShopModel.find();
  return result;
};

// Database Query for get shop information by shopId
const getShopById = async (id) => {
  const shopId = { shopId: id };
  const result = await ShopModel.findOne(shopId);
  return result;
};

// Database Query for get shop information by email address
const getShopByEmail = async (email) => {
  const result = await ShopModel.find({ email });
  return result;
};

module.exports.ShopService = {
  createShop,
  getAllShops,
  getShopById,
  getShopByEmail,
};
