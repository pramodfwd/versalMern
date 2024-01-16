import { config } from "dotenv";
import express from "express";
import { productsRoutes } from "./routes/products.js";
import { usersRoutes } from "./routes/users.js";
import mongoose from "mongoose";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
export const __dirname = dirname(__filename);

config();
const server = express();

// DB connections
main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
  console.log("database connected");
}

// body parser
server.use(cors());
server.use(express.json());
server.use(express.static(process.env.PUBLIC_DIR));
server.use("/users", usersRoutes);
server.use("/products", productsRoutes);
server.use("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "build", "index.html"));
});

server.listen(process.env.PORT, () => {
  console.log("server started");
});
