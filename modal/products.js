import mongoose from "mongoose";
const { Schema } = mongoose;

//Schema
const productsSchema = new Schema({
  title: { type: String },
  description: { type: String, default: "" },
  price: {
    type: Number,
  },
  discountPercentage: {
    type: Number,
  },
  rating: {
    type: Number,
    default: 0,
  },
  brand: { type: String },
  category: { type: String },
  thumbnail: { type: String },
  images: [String],
});

export const Product = mongoose.model("Product", productsSchema);
