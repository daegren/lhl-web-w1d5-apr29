var add = require("./add");
var imported = require("../modules/exports").sayHi;

imported();

console.log("2 + 2 =", add(2, 2));
console.log("2 + (-2) =", add(2, -2));
console.log("42 + 63 =", add(42, 63));
