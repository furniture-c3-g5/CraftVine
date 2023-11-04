const { Router } = require("express")
const productsController = require("../controllers/productsController")
const router = Router()

router.get("/all_products", productsController.getProducts);
router.post("/Add_all_product", )

module.exports = router;