// Hoisting
// Variable "declaration" are "hoisted" towords "top" of their scope

// so this type of hoisting will only work on "var" variables and not with 'const' and 'let'
test=10
console.log(test);

var test=5;

// hoisting in functions

// this type of definition of functions with functions keyword can also be hoisted but not function expressions
demo() 
function demo(){
    console.log('i am a demo function');
}

// Not function expression or arrow function
demo2()
let demo2=()=>{
    console.log('hello programmers');
}
