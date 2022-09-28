const ApiError = require("../error/ApiError");

const { Shop } = require("../models/models");

class ShopController {
  async getAllShops(req, res, next) {
    const shops = await Shop.findAll();
    return res.json(shops);
  }

  async addShop(req, res) {
    const { name } = req.body;
    const shop = await Shop.create({ name });
    return res.json(shop);
  }

  async deleteShop(req, res) {}
}
module.exports = new ShopController();
