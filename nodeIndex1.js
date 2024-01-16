import http from "http";
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
const server = http.createServer((req, res) => {
  if (req.url.startsWith("/product")) {
    const id = req.url.split("/")[2];
    const prd = product.find((p) => p.id == +id);

    res.setHeader("document-type", "text/html");
    let modiproduct = index
      .replace("**title**", prd.title)
      .replace("**image**", prd.thumbnail)
      .replace("**price**", prd.price)
      .replace("**rating**", prd.rating);
    res.end(modiproduct); // responce body
    return;
  }

  switch (req.url) {
    case "/":
      res.setHeader("document-type", "text/html");
      res.end(index); // responce body
      break;
    case "/data":
      res.setHeader("document-type", "application/json");
      res.end(JSON.stringify(data)); // responce body
      break;
    case "/product":
      res.setHeader("document-type", "text/html");
      let modiproduct = index
        .replace("**title**", product.title)
        .replace("**image**", product.thumbnail)
        .replace("**price**", product.price)
        .replace("**rating**", product.rating);
      res.end(modiproduct); // responce body
      break;
    default:
      res.writeHead(404);
      res.end();
  }
});

server.listen(8080);
