const sayMyName = (name) => {
  console.log(`hola ${name}`);
};

sayMyName("marco");
const { lusho, arturito } = require("./02-names");
sayMyName(lusho);
sayMyName(arturito);
const names = require("./02-names");

sayMyName(names.eva);
sayMyName(names.eduardo);
