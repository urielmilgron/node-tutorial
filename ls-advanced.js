//When we wants knowns how many files have a directory we can use readdir
const fs = require('node:fs')

//When we execute ls-advanced.js we can add other directory and this variable will read the 2st argument
const systemDir = process.argv[2] ?? '.'

fs.readdir(systemDir, (err, files) => {
    if(err){
        console.error("Error when try to read this directory")
        return;
    }

    files.forEach(item => {
        console.log(item)
    })
})
