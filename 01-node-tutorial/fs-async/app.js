const { readFileSync, writeFileSync } = require("fs");

console.log("start");
const first = readFileSync("../fs-modul/content/first.txt", "utf8");
const second = readFileSync("../fs-modul/content/second.txt", "utf8");
