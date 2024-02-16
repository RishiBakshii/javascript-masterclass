// Working with arrays (Simple Methods)

const letter=['a','b','c','d'];

// REVERSE (Mutate the original array)
const reversed=letter.reverse()
letter
reversed

// CONCAT (Non- mutating)
let nums=[1,2,3,4];

let concated=nums.concat(letter)
nums
concated

// JOIN (Non-mutating)
const joined=letter.join("-")
console.log(joined,typeof joined);
letter

// Slice (Non-mutating) (use to extract part of the array)
let demoArr=[3,5,6,8,2];
let slicedArray=demoArr.slice(2,4) // last index is excluded // 1 - till the end (if last index is not given)
demoArr
slicedArray

// Splice (Mutating-Method)
    // use to add new element's into the array
    // Array.splice(index,deleteValue,valueToBeAdded)
    // Return's deleted item in the form of array

let num=[3,5,7,9,2]
const deletedElements=num.splice(1,2,4)
num

console.log(num.splice(1,0,6))
num
deletedElements

// At Method (it can also work on strings)
let arr=[23,45,54,87,75];

console.log(arr);
console.log(arr.at(-1));

let username='carlos'
console.log(username.at(-1))

// Higher order methods
// Map method

// create new aray form original array by applying
// transoformation function

let salaries=[3000,4000,5000,6000,7000]

const newSalaries=salaries.map((salary)=>{
    return salary + salary/2
})

newSalaries

// Filter Method (Used to perform filtration on array)
const prices=[90,45,30,60,30,20]

const filteredPrices=prices.filter((price)=>price>45)
filteredPrices

// Reduce Method
    // run reducer function for each array element
    // array.reduce(function(total,currentVale),initialValue)
    // it returns single value

const marks=[10,20,30,40]

const sum=marks.reduce((total,current)=>{
    return total+current
},0)
sum

// Find method
// It returns the "first" element we are looking for...
// wheenver we need to find someting in array of objects we can use this method
// if not present is returns undefined

let students=[{id:1,name:"alex"},{id:2,name:"john"},{id:3,name:"Carlos"}]

const result=students.find((student)=>{
    return student.id==1
})

result

// findIndex Method
// It returns index of the array element that first pass the condition, otherwise -1

let ages=[21,18,19,17,23]

const resultingIndex=ages.findIndex((age)=>age==19)
resultingIndex

// "some" and "every" method

// "some" method return true if "any" array element pass the test
// every method return "true" if "all" elements pass the test

let scores=[19 ,25,34,67,65,80,92]

console.log(scores.some((score)=>score<20))

console.log(scores.every((score)=>score>=19));

// Flat Method

// it creates the new array with the combined elements fo subarrays

let nestedArray=[1,2,3,[4,5,[6,8,[9,4,3]]]]

nestedArray
console.log(nestedArray.flat(3)) // by default the flat value is 1


// Flat Map
// it is a combination of the map() method and flat() method by default depth value of 1

let cart=[
    {
    name:"MobilePhone",
    qty:2,
    price:500
    },
    {
    name:"Tablet",
    qty:1,
    price:1000  
    }
]

let newCart = cart.map((item)=>{
    if(item.name==='MobilePhone'){
        return [item,{
            name:"ScreenProtector",
            qty:1,
            price:0
        }]
    }

    else{
        return [item]
    }
})

newCart




