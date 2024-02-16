let stringType = "50";

console.log(stringType, typeof stringType);


// Number method
let numberType = Number(stringType)
console.log(numberType, typeof numberType);

// Imp note
//  - In number method passing String must be of numeric values


// String method
numberType = 50
stringType= String(numberType)
console.log(stringType, typeof stringType);

// Boolean Method true/false
let age=3;
let booleanValueOfAge=Boolean(age)
console.log(booleanValueOfAge, typeof booleanValueOfAge);