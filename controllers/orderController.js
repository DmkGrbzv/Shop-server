const ApiError = require("../error/ApiError");
const uuid = require("uuid");
const path = require("path");

const { Order, OrderProduct } = require("../models/models");

class OrderController {
  async createOrder(req, res) {
    let { email, phone, address, product } = req.body;
    const order = await Order.create({ email, phone, address });
    let orderId = order.id;
    product = JSON.parse(product);

    if (product.length) {
      product.forEach((element) => {
        OrderProduct.create({
          orderId: orderId,
          productId: element,
        });
      });
    }
    return res.json(order);
  }

  async getOrder(req, res) {}
}
module.exports = new OrderController();
