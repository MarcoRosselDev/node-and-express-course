const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log("user hit the resource");
  res.send("home page");
});

app.get("/about", (req, res) => {
  console.log("user response on about");
  res.send("about page");
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
