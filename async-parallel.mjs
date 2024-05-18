//IMPORTANT: Use it in case any module has no promises.

import { readFile } from 'node:fs/promises'

//This method is very fast and make 2 process in paralell
Promise.all([
    readFile('./textExample.txt','utf-8'),
    readFile('./textExample2.txt', 'utf-8')
]).then(([firstText, secondText]) => {
    console.log("First text: "+firstText)
    console.log("Second text: "+secondText)
})