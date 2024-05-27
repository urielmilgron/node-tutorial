//When we wants knowns how many files have a directory we can use readdir
const fs = require('node:fs/promises')
const path = require('node:path')

//When we execute ls-advanced.js we can add other directory and this variable will read the 2st argument
const systemDir = process.argv[2] ?? '.'

// fs.readdir(systemDir, (err, files) => {
//     if(err){
//         console.error("Error when try to read this directory")
//         return;
//     }

//     files.forEach(item => {
//         const extension = path.extname(item)
//         const filepath = path.join(folder, file)
//         console.log("Name:", item, "Extension:",extension)
//         fs.stat(filepath)
//     })
// })

//Code of midu

async function ls (folder){
    let files
try{
    files = await fs.readdir(folder)
} catch{
    console.error("There was an error but I won't tell you what error.")
    process.exit(1)
}
const filePromises = files.map(async file => {
    const filePath = path.join(folder, file)
    let stats
    try {
        stats = await fs.stat(filePath)
    } catch {
        console.error('Could not be read file')
        process.exit(1)
    }
    const isDirectory = stats.isDirectory
    const fileType = isDirectory ? 'Yes, it is a directory' : 'No bro, next, is another type'
    const fileSize = stats.size
    const fileModified = stats.mtime.toLocaleDateString()

    return `${fileType} ${file.padEnd(20)} ${fileSize.toString().padStart(10)} ${fileModified}`
})

const filesInfo = await Promise.all(filePromises)

filesInfo.forEach(fileInfo => {
    console.log(fileInfo)
})
}

ls(systemDir)