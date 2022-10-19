const express = require("express");
const app = express();
const people = require("./02-express-tutorial/routes/people");
// static assets
app.use(express.static("./02-express-tutorial/methods-public"));
// parse form data
app.use(express.urlencoded({ extended: false }));
// parse json
app.use(express.json());

app.use("/api/people", people);

app.post("/login", (req, res) => {
  const { name } = req.body;
  if (name) {
    return res.status(200).send(`Welcome ${name}`);
  }

  res.status(401).send("Please Provide Credentials");
});

app.listen(5000, () => {
  console.log("server listening on port 5000...");
});
