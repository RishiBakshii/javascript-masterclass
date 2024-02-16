// Passing function as an Argument (Higher order function example)

// Example 1
let upperCase = function(str){
    return str.toUpperCase()
}

let lowerCase = function(str){
    return str.toLowerCase()
}

let transformer = function(str,fun){
    return fun(str)
}

console.log(transformer("Hello",lowerCase));

// Example 2
const compliment = function(msg){
    return function(name){
        return `${name}: ${msg} `
    }
}

console.log(compliment("this is a demo msg")('rishi!'))

// Example 3 (which is usually used)
let complimented = compliment("You are a good coder")
console.log(complimented('helloWorld'))
