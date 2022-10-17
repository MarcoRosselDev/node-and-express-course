const express = require("express");
const app = express();
const { products, people } = require("./data");

app.get("/", (req, res) => {
  res.send('<h1>home page</h1><a href="/api/products">products</a>');
});

app.listen(5000, () => {
  console.log("server is listening on port 5000...");
});
