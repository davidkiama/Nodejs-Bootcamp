const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  console.log(req.url);

  const pathName = req.url;

  switch (pathName) {
    case "/":
    case "/overview":
      res.end("This is the OVERVIEW");
      break;
    case "/kiama":
      res.end("This is KIAMA");
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
