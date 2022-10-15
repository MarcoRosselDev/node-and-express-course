const http = require("http");

const server = http.createServer((req, res) => {
  console.log("user hit the server");
  res.end('home page, para que no se confunda el navegador')
});

server.listen(5000);
