const http = require("http");

const server = http.createServer((req, res) => {
  console.log("user hit the server");
  res.writeHead(200, { "content-type": "text/html" });
  res.write("<h1>home page</h1>");
  res.end("home page, para que no se confunda el navegador");
});

server.listen(5000);
