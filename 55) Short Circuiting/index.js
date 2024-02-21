// Falsy values => 0,false,null,undefined,''(empty string)

// AND (&&) operator (Output true if all input true)
// the first false value comes in case of false breakage
// and last value comes in case of all all true chains
let result = true && 'some content div'
console.log(result);


// OR (||) operator (Output true if any given input true)
// first value to come true gets assingned
let result2= false || 'hello World' || false
console.log(result2);

// As || operator find first output true. it simply return that true value and does not move forward