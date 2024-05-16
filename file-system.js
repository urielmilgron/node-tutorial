const fs = require('node:fs') //After node 16.0 version will use node: before any module

//fs Syncronous

//For read files we can use readFileSync function, this need a file and codifing format

//const textToRead = fs.readFileSync('./textExample.txt', 'utf-8')
//console.log(textToRead)

//fs asyncronous

//In this case we don't should use readFileSync because its a syncronous function

//readFile is the asyncronous functión for read

//const textToReadAsync = fs.readFile('./textExample2.txt','utf-8')


//To know when the file has finished reading we can use callbacks in a 3rd parameter of readFile, and its not neccesary that function will be assigned to variable
fs.readFile('./textExample2.txt','utf-8',(err,data)=>{
console.log(data)
})



