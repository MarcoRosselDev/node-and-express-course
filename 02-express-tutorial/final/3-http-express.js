const express = require("express");
const path = require("path");
const app = express();

app.use(express.static("./02-express-tutorial/public"));

// app.get("/", (req, res) => {
//   res.sendFile(
//     path.resolve(__dirname, "./02-express-tutorial/navbar-app/index.html")
//   );
// });
app.all("*", (req, res) => {
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
