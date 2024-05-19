//Path is a native module, this gives us a path to the files we have

//We can make a path of files, also know the extension of a file, create absolutes routes, etc


const path = require('node:path')

//Path.sep tells us how the paths are separated in our OS
console.log(path.sep)

//Join routes with path
//If we have the next path = > \content\subfolder\file.txt ##In unix will be use the / separator, so we can use a join function

const joinPaths = path.join('content','subfolder', 'file.txt');

console.log(joinPaths)


//Know base name of a file with path

const base = path.basename('/content/subfolder/file.txt');
const base2 = path.basename('\content\subfolder\file.txt');

//This will give us a base name of path "file.txt" when will use / separator, if you use \ separator base result will give us a path without \ separator
console.log(base)

//If will add a 2st parameter we can show a file without the extension of that

const withoutExtension = path.basename('/content/subfolder/file.txt', '.txt')
console.log(withoutExtension)

//When we want know a extension of file we can use extension function
const extensionOfFile = path.extname('/content/subfolder/file.txt')
console.log(extensionOfFile)