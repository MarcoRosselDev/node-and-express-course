const path = require("path");

console.log(path.sep);

const filePath = path.join("/path-modul/", "subfolder", "text.txt");
console.log(filePath);

const base = path.basename(filePath);
console.log(base);

const absolute = path.resolve(__dirname, "subfolder", "text.txt");

console.log(absolute);
console.log("me gusta nodemon");
console.log("por que me ayuda a no repetir el comando de npm app.js");
