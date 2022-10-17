const express = require("express");
const app = express();

// req => middleware => res

app.get("/", (req, res) => {
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();
  console.log(method, url, time);
  res.send("home");
});
app.get("/about", (req, res) => {
  res.send("about");
});

app.listen(5000, () => {
  console.log("server listening on port 5000");
});
