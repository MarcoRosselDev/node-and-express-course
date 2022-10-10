const sayMyName = (name) => {
  console.log(`hola ${name}`);
};

sayMyName("marco");
// 1 metod
const { lusho, arturito } = require("./02-names");
sayMyName(lusho);
sayMyName(arturito);
// 2 metod
const names = require("./02-names");

sayMyName(names.eva);
sayMyName(names.eduardo);

// 3 metod

const randomName = require("./03-alternative-flavor");

console.log(randomName);
