import express from "express";
import {
  PostProducts,
  deleteProducts,
  getAllProducts,
  getProductsById,
  replaceProducts,
  updateProducts,
} from "./controller/products.js";

const server = express();
server.use(express.json());

// MVC modal-view-controller
// modal - data structure
// view - front-end file
// controller - logics (which is stored in controller folder)

server.get("/products", getAllProducts);
server.get("/products/:id", getProductsById);
server.post("/products", PostProducts);
server.put("/products/:id", replaceProducts);
server.patch("/products/:id", updateProducts);
server.delete("/products/:id", deleteProducts);

server.listen(8080, () => {
  console.log("server started");
});
