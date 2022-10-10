const { readFile } = require("fs");

const getText = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, "utf8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

const start = async () => {
  try {
    const first = await getText(
      "./01-node-tutorial/fs-modul/content/first.txt"
    );
    const second = await getText(
      "./01-node-tutorial/fs-modul/content/second.txt"
    );
    console.log(first, second);
  } catch (error) {
    console.log(error);
  }
};

start();

// getText("./01-node-tutorial/fs-modul/content/first.txt")
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));
