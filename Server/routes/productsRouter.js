const { Router } = require("express");
const productController = require("../controllers/productController"); 
const router = Router();

router.get("/All_products", productController.allProducts)
router.get("/Get_Product_By_Id/:id", productController.getBroductById)
router.post("/Add_New_product", productController.imageProduct, productController.addNewProduct)
router.put("/Update_Product_By_Id/:id", productController.imageProduct, productController.updateProductById)
router.delete("/Delete_Product_By_Id/:id", productController.deleteProductById)

module.exports = router;