const router = require("express").Router();
const productController = require("../controllers/productController");


router.post('/products', productController.createProduct);


module.exports = router;