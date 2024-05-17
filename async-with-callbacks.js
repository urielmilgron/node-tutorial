const fs = require('node:fs')


console.log("Reading first text")
//It is not necessary to save fs.readFile in a variable when using async with 
//callbacks because when this function finishes, it shows us the first text.
fs.readFile('./textExample.txt', 'utf-8', (err,data) => {
    console.log('1st text: '+data)
})

console.log("Make process while callback will ejecuted")

console.log("Reading second text")
fs.readFile('./textExample2.txt','utf-8', (err,data) => {
    console.log('Second text: '+data)
})