//When we wants knowns how many files have a directory we can use readdir
const fs = require('node:fs/promises')
const path = require('node:path')

//When we execute ls-advanced.js we can add other directory and this variable will read the 2st argument
const systemDir = process.argv[2] ?? '.'

fs.readdir(systemDir, (err, files) => {
    //IMPORTANT: You should handle errors in the code for better understanding and to be able to find the solution more quickly
    //Failure to handle errors concludes many times in a triggerUncaughtException in console
    if(err){
        console.error("Error when try to read this directory")
        //I use the return to end the process
        return;
    }

    files.forEach(item => {
        const extension = path.extname(item)
        const filepath = path.join(folder, file)
        console.log("Name:", item, "Extension:",extension)
        fs.stat(filepath)
    })
})

//Code of midu

async function ls (folder) {
  let files
  try{
    files = await fs.readdir(folder)
  } catch {
    console.error("No se puede leer ese directorio")
    process.exit(1)
  }

  const filePromises = files.map( async file => {
    const filepath = path.join(folder,file)
    try{
        const fileStats = await fs.stat(filepath) //stat give us file information
    }
  })
   
}

ls(folder)