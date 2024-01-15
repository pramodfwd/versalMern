import { config } from "dotenv";
import express from "express";
import { productsRoutes } from "./routes/products.js";
import { usersRoutes } from "./routes/users.js";

config();

const server = express();

console.log("env", process.env.DB_PASSWORD);
// body parser
server.use(express.json());
server.use(express.static(process.env.PUBLIC_DIR));
server.use("/users", usersRoutes);
server.use("/products", productsRoutes);

server.listen(process.env.PORT, () => {
  console.log("server started");
});
