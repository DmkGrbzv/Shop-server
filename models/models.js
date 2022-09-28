const sequelize = require("../db");
const { DataTypes } = require("sequelize");
const { Sequelize } = require("../db");
const { INTEGER } = require("sequelize");
const { DECIMAL } = require("sequelize");

const Shop = sequelize.define("shop", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
});

const Order = sequelize.define("order", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, unique: true },
  phone: { type: DataTypes.INTEGER, unique: true },
  address: { type: DataTypes.STRING, unique: false, allowNull: false },
});
const Product = sequelize.define("product", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING },
  price: { type: DataTypes.INTEGER, allowNull: false },
  img: { type: DataTypes.STRING, allowNull: false },
});

const OrderProduct = sequelize.define("order_product", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

Shop.hasMany(Product);
Product.belongsTo(Shop);

Order.hasMany(OrderProduct);
OrderProduct.belongsTo(Order);

Product.hasOne(OrderProduct);
OrderProduct.belongsTo(Product);

module.exports = {
  Shop,
  Product,
  Order,
  OrderProduct,
};
