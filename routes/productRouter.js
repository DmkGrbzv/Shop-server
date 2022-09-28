const Router = require("express");
const router = new Router();
const controller = require("../controllers/productController");

router.post("/create", controller.createProduct);
router.get("/getAll", controller.getAll);
// router.delete("/:id", controller);

module.exports = router;
