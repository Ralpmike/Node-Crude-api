const Product = require("../models/product.model.js");

//? GET ALL PRODUCTS
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    if (products.length === 0) {
      return res.status(404).json({ message: "No products found" });
    }
    res
      .status(200)
      .json({ products, message: "Products fetched successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//? GET A SINGLE PRODUCT
const getSingleproduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.status(200).json({ product, message: "Product fetched successfully" });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

//? CREATE A PRODUCT

const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json({ product, message: "Product created successfully" });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

//? UPDATE A PRODUCT
const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({
      product,
      message: "Product updated successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const deleteSingleProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({ product, message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getAllProducts,
  getSingleproduct,
  createProduct,
  updateProduct,
  deleteSingleProduct,
};
