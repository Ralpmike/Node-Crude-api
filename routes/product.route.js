const express = require("express");
const router = express.Router();
const {
  getAllProducts,
  deleteSingleProduct,
  getSingleproduct,
  createProduct,
  updateProduct,
} = require("../controllers/product.controllers.js");

//? GET ALL PRODUCTS
router.get("/", getAllProducts);

//? GET A SINGLE PRODUCT
router.get("/:id", getSingleproduct);

//? DELETE A PRODUCT
router.delete("/:id", deleteSingleProduct);

//? CREATE A PRODUCT
router.post("/", createProduct);
//?
router.put("/:id", updateProduct);

module.exports = router;
