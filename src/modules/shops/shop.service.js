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

module.exports.ShopService = {
  createShop,
};
