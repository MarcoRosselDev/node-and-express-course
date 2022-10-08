const { readFileSync, writeFileSync } = require("fs");

console.log("start");
const first = readFileSync("../fs-modul/content/first.txt", "utf8");
const second = readFileSync("../fs-modul/content/second.txt", "utf8");

writeFileSync(
  "./example.txt",
  `ejemplo de texto : (${first})
and : (${second})`,
  { flag: "a" }
);

console.log("done with this task");
console.log("starting the next one");
