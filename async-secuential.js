const { readFile } = require('node:fs/promises')

async function init () {
    console.log('Reading first text')
    const firstText = await readFile('./textExample.txt', 'utf-8')
    console.log("First text: "+firstText)

    console.log("Reading second text")
    const secondText = await readFile('./textExample2.txt', 'utf-8')
    console.log("Second text: "+secondText)
}

init()