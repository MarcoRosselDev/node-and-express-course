const { readFile } = require("fs");

readFile(
  "./01-node-tutorial/fs-modul/content/first.txt",
  "utf8",
  (err, data) => {
    if (err) {
      return;
    } else {
      console.log(data);
    }
  }
);
