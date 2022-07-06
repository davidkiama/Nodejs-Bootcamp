const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Hello from the server !");
});

const PORT = 8000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
