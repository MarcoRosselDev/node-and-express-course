const { readFile, writeFile } = require("fs");

const first = result;

readFile("./content/second.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const second = result;
  writeFile(
    "./content/result-async.txt",
    `este es el resultado : ${first},
    ${second}`,
    (err, result) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log(result);
    }
  );
});
