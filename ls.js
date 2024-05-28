// When we wants knowns how many files have a directory we can use readdir
const fs = require('node:fs')

fs.readdir('.', (err, files) => {
  if (err) {
    console.error('Error when try to read this directory')
    return
  }

  files.forEach(item => {
    console.log(item)
  })
})
