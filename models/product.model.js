const { Schema, model } = require("mongoose");

const ProductSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter a product name"],
    },
    quantity: {
      type: Number,
      required: [true, "Please enter a product category"],
      default: 0,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    image: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const Product = model("Product", ProductSchema);

module.exports = Product;
