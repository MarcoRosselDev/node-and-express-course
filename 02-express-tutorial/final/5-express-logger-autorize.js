const express = require("express");
const app = express();
const morgan = require("morgan");
const logger = require("./logger");
const authorize = require("./authorize");
// req => middleware => res

//app.use([logger, authorize]);
//app.use(express.static("./02-express-tutorial/public"));

app.use(morgan("tiny"));

app.get("/", (req, res) => {
  res.send("home");
});
app.get("/about", (req, res) => {
  res.send("about");
});
app.get("/api/products", (req, res) => {
  res.send("products");
});
app.get("/api/items", (req, res) => {
  res.send("items");
});

app.listen(5000, () => {
  console.log("server listening on port 5000");
});
