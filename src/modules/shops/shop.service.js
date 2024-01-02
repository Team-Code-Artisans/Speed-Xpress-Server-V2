const { uid } = require("uid");
const ShopModel = require("./shop.model");

// Database Query for insert a new parcel
const createShop = async (payload) => {
  let shopId = `SXSHOP${uid(6)}`;

  const isExist = await ShopModel.findOne({ shopId });

  if (!isExist) {
    const result = await ShopModel.create({ shopId, ...payload });
    return result;
  } else {
    shopId = `SXSHOP${uid(6)}`;
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

// Database Query for get shops by email
const getShopByEmail = async (email) => {
  const result = await ShopModel.find({ merchantEmail: email });
  return result;
};

// Database Query for update shop info by _id
const updateShopInfoById = async (id, updatedParcel, option) => {
  const result = await ShopModel.findByIdAndUpdate(id, updatedParcel, option);
  return result;
};

// Database Query for delete a shop by _id
const deleteShopById = async (id) => {
  const result = await ShopModel.findByIdAndDelete(id);
  return result;
};

module.exports.ShopService = {
  createShop,
  getAllShops,
  getShopById,
  getShopByEmail,
  updateShopInfoById,
  deleteShopById,
};
