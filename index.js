const express = require("express");
const mongoose = require("mongoose");
const app = express();
const productRoutes = require("./routes/product.route.js");

// const Product = require("./models/product.model.js");

//? MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.use("/", productRoutes);

app.use("/api/products", productRoutes);

//? GET ALL PRODUCTS

app.get("/", (req, res) => {
  res.send("Hello World!");
});
// app.get("/api/products", async (req, res) => {
//   try {
//     const products = await Product.find({});
//     res
//       .status(200)
//       .json({ products, message: "Products fetched successfully" });
//   } catch (error) {
//     res.status(500).json({
//       message: error.message,
//     });
//   }
// });

// //? GET SINGLE PRODUCT
// app.get("/api/products/:id", async (req, res) => {
//   console.log(req);
//   try {
//     const { id } = req.params;
//     const product = await Product.findById(id);
//     res.status(200).json({ product, message: "Product fetched successfully" });
//   } catch (error) {
//     res.status(500).json({
//       message: error.message,
//     });
//   }
// });

//? CREATE A PRODUCT
// app.post("/api/products", async (req, res) => {
//   try {
//     const product = await Product.create(req.body);
//     res.status(201).json({
//       product,
//       message: "Product created successfully",
//       total: product.length,
//     });
//   } catch (error) {
//     res.status(500).json({
//       message: error.message,
//     });
//   }
// });

//? UPDATE A PRODUCT
// app.put("/api/products/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const product = await Product.findByIdAndUpdate(id, req.body, {
//       new: true,
//       runValidators: true,
//     });
//     if (!product) {
//       return res.status(404).json({ message: "Product not found" });
//     }

//     const updatedProduct = await Product.findById(id);
//     res.status(200).json({
//       product: updatedProduct,
//       message: "Product updated successfully",
//     });
//     // res.status(200).json({ product, message: "Product updated successfully" });
//   } catch (error) {
//     res.status(500).json({
//       message: error.message,
//     });
//   }
// });

// //? DELETE A PRODUCT
// app.delete("/api/products/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const product = await Product.findByIdAndDelete(id);
//     if (!product) {
//       return res.status(404).json({ message: "Product not found" });
//     }
//     res.status(200).json({ product, message: "Product deleted successfully" });
//   } catch (error) {
//     res.status(500).json({
//       message: error.message,
//     });
//   }
// });

mongoose
  .connect(
    "mongodb+srv://ralphmike996:MKX0Ql5OfeTJzrKs@crudebackendapi.vl7rnfy.mongodb.net/Node-CRUDE?retryWrites=true&w=majority&appName=crudeBackendApi"
  )
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(3000, () => {
      console.log("Example app listening on port 3000!");
    });
  })
  .catch((err) => console.log(err));
