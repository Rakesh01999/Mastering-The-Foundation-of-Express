const fs = require('fs') // fs-module

// reading a file text

const readText = fs.readFileSync('./texts/read.txt', 'utf-8')
// console.log(readText);

// writing a text
const writtenText = fs.writeFileSync('./texts/write.txt', readText+ 'This is my written text')
// console.log(writtenText);

