import fs from "fs";
import path from "path";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
export const __dirname = dirname(__filename);

const index = fs.readFileSync("index.html", "utf-8");
const data = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, "data.json"), "utf-8")
);
const products = data.products;
import express from "express";

const server = express();
server.use(express.json());

const getAllProducts = (req, res) => {
  res.json(products);
};
const getProductsById = (req, res) => {
  const id = req.params.id;
  const product = products.find((p) => p.id === +id);
  res.json(product);
};
const PostProducts = (req, res) => {
  console.log(req.body);
  products.push(req.body);
  res.json(req.body);
};
const replaceProducts = (req, res) => {
  const id = req.params.id;
  const productIndex = products.findIndex((p) => p.id === +id);
  products.splice(productIndex, 1, { ...req.body, id: id });
  res.json(req.body);
};
const updateProducts = (req, res) => {
  const id = req.params.id;
  const productIndex = products.findIndex((p) => p.id === +id);
  const product = products[productIndex];
  products.splice(productIndex, 1, { ...product, ...req.body });
  res.json(req.body);
};
const deleteProducts = (req, res) => {
  const id = req.params.id;
  const productIndex = products.findIndex((p) => p.id === +id);
  const product = products[productIndex];
  products.splice(productIndex, 1);
  res.json(product);
};

// Read Get API /products
server.get("/products", getAllProducts);

// Read Get API /products/:id
server.get("/products/:id", getProductsById);

//Post API /products
server.post("/products", PostProducts);

//Update API /products
server.put("/products/:id", replaceProducts);

//Update API /products
server.patch("/products/:id", updateProducts);

//Delete API /products/:id
server.delete("/products/:id", deleteProducts);

server.listen(8080, () => {
  console.log("server started");
});
