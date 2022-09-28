const ApiError = require("../error/ApiError");
const uuid = require("uuid");
const path = require("path");

const { Product } = require("../models/models");

class ProductController {
  async createProduct(req, res, next) {
    try {
      const { name, price, shopId } = req.body;
      const { img } = req.files;
      let fileName = uuid.v4() + ".jpg";
      img.mv(path.resolve(__dirname, "..", "static", fileName));
      const product = await Product.create({
        name,
        price,
        shopId,
        img: fileName,
      });
      return res.json(product);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
  async deleteProduct(req, res, limit, page) {}
  async getAll(req, res) {
    let { shopId, limit, page } = req.query;
    page = page || 1;
    limit = limit || 9;
    let offset = page * limit - limit;
    let products;
    if (!shopId) {
      products = await Product.findAndCountAll({ limit, offset });
    }
    if (shopId) {
      products = await Product.findAndCountAll({
        where: { shopId },
        limit,
        offset,
      });
    }
    return res.json(products);
  }
}
module.exports = new ProductController();
