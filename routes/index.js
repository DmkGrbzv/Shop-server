const Router = require("express");
const router = new Router();
const productRouter = require("./productRouter");
const shopRouter = require("./shopRouter");
const orderRouter = require("./orderRouter");

router.use("/order", orderRouter);
router.use("/shop", shopRouter);
router.use("/product", productRouter);

module.exports = router;
