// Numbers
let score=50;
console.log(score, typeof score);

// Mathematical operators * / % ** + -
let results=score/2  // give quotient
result= score%2 // give remainder

// Mathematical Expression
results = score *2 + (4*3) - 8 / 2 % 4;

// Using priority and precedence
// 1 () Brackets
// 2 ** Power Operator
// 3 * / % (From left to right)
// 4 + -  (From left to right)

console.log(results);

// Concatination of Numbers
let resultLine= 'My Total Score is = ' + results
resultLine

// Losse equality (==) Vs Strict Equality Operator (===)

// Loose Equality Operator (==) ,  it only checks the value and ignores the type
let age=22;
console.log(age=="22");

console.log(age!='22')

// Strict Equality Operator , focus on both value and its type
console.log(age==="22");
console.log(age!=='22');





