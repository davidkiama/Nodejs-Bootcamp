const http = require("http");
const url = require("url");
const fs = require("fs");
const { dirname } = require("path");

//To read the file just once
// We can read it synchronously since its top level code

const templateCard = fs.readFileSync(`${__dirname}/templates/template-card.html`, "utf-8");
const templateOverview = fs.readFileSync(`${__dirname}/templates/template-overview.html`, "utf-8");
const templateProduct = fs.readFileSync(`${__dirname}/templates/template-product.html`, "utf-8");

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8");
const dataObj = JSON.parse(data);

const replaceTemplate = (template, product) => {
  let output = template;

  output = output.replaceAll("{%PRODUCTNAME%}", product.productName);
  output = output.replaceAll("{%IMAGE%}", product.image);
  output = output.replaceAll("{%QUANTITY%}", product.quantity);
  output = output.replaceAll("{%PRICE%}", product.price);
  output = output.replaceAll("{%FROM%}", product.from);
  output = output.replaceAll("{%NUTRIENTS%}", product.nutrients);
  output = output.replaceAll("{%DESCRIPTION%}", product.description);
  output = output.replaceAll("{%ID%}", product.id);

  if (!product.organic) output = output.replaceAll("{%NOT_ORGANIC%}", "not-organic");

  return output;
};

const server = http.createServer((req, res) => {
  const pathName = req.url;

  switch (pathName) {
    case "/":
    case "/overview":
      res.writeHead(200, { "Content-type": "text/html" });

      const cardsHtml = dataObj.map((el) => replaceTemplate(templateCard, el)).join("");
      const output = templateOverview.replace("{%PRODUCT_CARDS%}", cardsHtml);
      res.end(output);
      break;
    case "/product":
      res.end("This is KIAMA");
      break;
    case "/api":
      res.writeHead(200, {
        "Content-type": "application/json",
      });
      res.end(data);
      break;
    default:
      res.writeHead(404, {
        "Content-type": "text/html",
      });
      res.end("<h1>Hello from the server</h1>");
  }
});

const PORT = 8000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
