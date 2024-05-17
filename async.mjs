//The extension of the file when use async with callbacks is .mjs 


//For async to work we need call a modules with ES módules
import { readFile } from 'node:fs/promises'

console.log("Reading 1st file")

const text = await readFile('./textExample.txt', 'utf-8')
console.log('1st text: '+text)
console.log('Working on different things while')


console.log("Reading 2st file")
const text2 = await readFile('./textExample2.txt', 'utf-8')
console.log('2st text: '+text2)

