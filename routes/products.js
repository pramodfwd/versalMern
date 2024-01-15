import express from "express";
import {
  createProducts,
  deleteProducts,
  getAllProducts,
  getProductsById,
  replaceProducts,
  updateProducts,
} from "../controller/products.js";

const router = express.Router();

router
  .get("/", getAllProducts)
  .get("/:id", getProductsById)
  .post("/", createProducts)
  .put("/:id", replaceProducts)
  .patch("/:id", updateProducts)
  .delete("/:id", deleteProducts);

export const productsRoutes = router;
