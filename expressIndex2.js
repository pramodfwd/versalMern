import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
export const __dirname = dirname(__filename);

const index = fs.readFileSync("index.html", "utf-8");
const data = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, "data.json"), "utf-8")
);
const product = data.products;

import express from "express";
import morgan from "morgan";

const server = express();

// send - html
// json - json

//middleware
//loggre middleware or application middleware
server.use((req, res, next) => {
  console.log(req.method, req.ip, req.hostname);
  next();
});

//Autherization middleware
const auth = (req, res, next) => {
  //   console.log(req.query);
  //   if (req.body.password === "123") {
  //     next();
  //   } else {
  //     res.sendStatus(401);
  //   }
  next();
};

//third party - morgan middleware
server.use(morgan("dev"));

// Built-in middleware - express.json middleware (allow and read body in json formate)
server.use(express.json());

// Built-in middleware - express.static middleware (take a public file and host it)
server.use(express.static("public"));

//APIs - Endpoint
server.get("/product/:id", auth, (req, res) => {
  console.log(req.params);
  res.json({ type: "GET" });
});
server.post("/", auth, (req, res) => {
  res.json({ type: "POST" });
});
server.put("/", (req, res) => {
  res.json({ type: "PUT" });
});
server.delete("/", (req, res) => {
  res.json({ type: "DELETE" });
});
server.patch("/", (req, res) => {
  res.json({ type: "PATCH" });
});

//knowledge
server.get("/", (req, res) => {
  //   res.send("hello");
  //   res.sendFile("index.html");
  //   res.json(product);
  //   res.sendStatus(404);
});

server.listen(8080, () => {
  console.log("server started");
});
