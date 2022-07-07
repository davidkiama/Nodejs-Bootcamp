const http = require("http");
const url = require("url");
const fs = require("fs");
const { dirname } = require("path");

//To read the file just once
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8");
const dataObj = JSON.parse(data);

const server = http.createServer((req, res) => {
  const pathName = req.url;

  switch (pathName) {
    case "/":
    case "/overview":
      res.end("This is the OVERVIEW");
      break;
    case "/kiama":
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
