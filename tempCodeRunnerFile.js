const http = require("http");
const { readFileSync } = require("fs");

// get all files
const homePage = readFileSync("./02-express-tutorial/navbar-app/index.html");
const homeStyles = readFileSync("./02-express-tutorial/navbar-app/styles.css");
const homeImage = readFileSync("./02-express-tutorial/navbar-app/logo.svg");
const homeLogic = readFileSync(
  "./02-express-tutorial/navbar-app/browser-app.js"
);

const server = http.createServer((req, res) => {
  console.log("added");
  const url = req.url;

  // home page
  if (url === "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(homePage);
    res.end();
  }
  // home styles
  else if (url === "/styles.css") {
    res.writeHead(200, { "content-type": "text/css" });
    res.write(homeStyles);
    res.end();
  }
  // home logic
  else if (url === "/browser-app.js") {
    res.writeHead(200, { "content-type": "text/javascript" });
    res.write(homeLogic);
    res.end();
  }
  // home image
  else if (url === "/logo.svg") {
    res.writeHead(200, { "content-type": "image/svg+xml" });
    res.write(homeImage);
    res.end();
  }

  // about page
  else if (url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>about page</h1>");
    res.end();
  }
  // 404
  else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write("<h1>page not found</h1>");
    res.end();
  }
});

server.listen(5000);
