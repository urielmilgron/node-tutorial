//You just have to add the word promises after /fs
const fs = require('node:fs/promises')

//Now will can use .then .finally .catch 
fs.readFile('./textExample.txt', 'utf-8')
    .then(text => {
        console.log(text)
    })