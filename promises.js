// //You just have to add the word promises after /fs
// const fs = require('node:fs/promises')

// //Now will can use .then .finally .catch 
// fs.readFile('./textExample.txt', 'utf-8')
//     .then(text => {
//         console.log(text)
//     })

//We can also use promisify, this is a utility to convert functions that are not promises.

const fs = require('node:fs')
const { promisify } = require('node:util')

const readFilePromiseConverted = promisify(fs.readFile)

readFilePromiseConverted('./textExample2.txt', 'utf-8')
.then(text => {
    console.log(text)
})

//But do not use this in functions if it has a native promises, just use this util when the function don't has a 
//promise native function

//We can also use await function, I will be explain this in await's file