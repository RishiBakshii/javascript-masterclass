let num=[1,2,3,4,5,6]

let result = num.slice(2).splice(1,2,9).push(5)

// note** push method returns the new length of the array

console.log(result);