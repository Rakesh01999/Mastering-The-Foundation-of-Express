// local module
// const add = require("./local-1")
const { a, add } = require("./local-1")
const { a:a2, add:add2 } = require("./local-2")

// console.log(add(2, 3));

// console.log(add); // { a: 10, add: [Function: add] }

// console.log(add.add(2, 3));
console.log(a);
console.log(add(2, 3));
console.log(a2);
console.log(add2(2, 3, 7));

// console.log(add(2,3)); 


// built in module

const path = require("path")

// console.log(path.dirname(E:\web\Programming Hero\Level 2\Mission 01-Be A Typescript Technocrat\Module 7-Mastering The Foundation of Express\learning-node\index.js)) // error/warning
// console.log(path.dirname("E:/web/Programming Hero/Level 2/Mission 01-Be A Typescript Technocrat/Module 7-Mastering The Foundation of Express/learning-node/index.js"))
// console.log(path.parse("E:/web/Programming Hero/Level 2/Mission 01-Be A Typescript Technocrat/Module 7-Mastering The Foundation of Express/learning-node/index.js"))
console.log(path.join("E:/web/Programming Hero/Level 2/Mission 01-Be A Typescript Technocrat/Module 7-Mastering The Foundation of Express/learning-node/", "local-1.js"))

