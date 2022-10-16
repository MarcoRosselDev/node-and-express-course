const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log("user hit the resource");
  res.status(200).send("home page");
});

app.get("/about", (req, res) => {
  console.log("user response on about");
  res.status(200).send("about page");
});

app.all("*", (req, res) => {
  console.log("missed page");
  res.status(404).send("<h1>resource not found</h1>");
});

app.listen(5000, () => {
  console.log("lisining");
});

// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen
