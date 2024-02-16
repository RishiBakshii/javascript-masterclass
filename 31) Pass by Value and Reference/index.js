// In javascript array and objects are passed by reference when assinged using '=' to a variable

let arr=[1,2,3,4,5]
let getRef=arr

// pass by reference
getRef[0]=100
console.log(getRef);
console.log(arr);


// pass by value
let getValue=[...arr]

getValue[0]=200
console.log(getValue);
console.log(arr);