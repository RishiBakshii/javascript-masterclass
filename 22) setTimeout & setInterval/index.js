// setTimeout -> run function "once" after "interval" of time
// setInterval -> Run function repeatedly, Starting after the interval of time, then repeating...

// setTimeout

// setTimeout(func|code,delay,arg1,arg2,...)

function greeting(name){
    console.log(`Welcome ${name}`);
}

setTimeout(greeting,3000,'Rishi')


// setInterval

// setInterval(func|code,delay,arg1,arg2,...)

setInterval(greeting,500,'Rishi')