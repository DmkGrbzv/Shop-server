const Router = require("express");
const router = new Router();
const controller = require("../controllers/orderController");

router.post("/create", controller.createOrder);
// router.get("/GetAll", controller);
// router.delete("/:id", controller);

module.exports = router;
