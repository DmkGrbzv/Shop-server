const Router = require("express");
const router = new Router();
const controller = require("../controllers/shopController");

router.post("/create", controller.addShop);
router.get("/getAll", controller.getAllShops);
// router.delete("/delete", controller.deleteShop);
module.exports = router;
