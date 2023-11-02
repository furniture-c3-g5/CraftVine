const { Router } = require("express")
const controller = require("../controllers")
const router = Router()

router.get("/", controller.getProducts)
router.post("/", controller.createNewProduct)

module.exports = router
