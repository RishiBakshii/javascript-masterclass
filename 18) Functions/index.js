// It is simply a peice of code which we can use in our program many times

// it is just like a varibale holding some peice of code

// Declaration

function nameOfFunction(){
    console.log('Hello there, i am a function body');
}

// function call
nameOfFunction()

// function expression
let fun = function(){ // also called anonymous function
    console.log('This is an example of function expression');
}

// function usecase example
const invitation = function(name='defaultName',time='night'){
    console.log(`welcome ${name} you're invited to our event at ${time}`);
}

invitation("Rishi Bakshi",'morning')
invitation()

// Returning Values (How to return value from the function)
let ageCalculation=function(birthYear,currentYear=2023){
    let age=currentYear-birthYear
    return age
}

let functionResult=ageCalculation(2004)
console.log(`Your age is ${functionResult}`);