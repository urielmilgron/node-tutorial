//Process object gives us control and information of the current execution process.

//input arguments

console.log(process.argv)

//we can control the process and its output, If you have a process.exit() enabled, all following processes will not run

//process.exit(0) //=> 0 describe that everything is fine and the process should completed
//process.exit(1) // => 1 describe any bugs and we want to see this to give the code corrections

//We have the control of the events of the process

//process.on('exit', () => { //When the process finished clean the console
//   console.clear()
//})


//Current working directory, gives us the directory of the executed process.
console.log(process.cwd())

//Enviroments variables, you can create a environment var in console and show us in a console log
console.log(process.env.CACA)