// Destructuring the arrays

let hotel={
    name:"Hotell",
    location:"street No xyz Delhi",
    categories:["chinese","Italian","English"]
}

// Simple Example
// Without

let items=[2,3,4,5]
let x=items[0]
let y=items[1]
let z=items[2]
let p=items[3]

console.log(x,y,z,p);

// With destructuring
let [a,b,c,d]=items
console.log(a,b,c,d);

// Example 2 (here the second value of the categories array is skipped by using a empty ", ,")
let [first,,third]=hotel.categories
console.log(first,third);

// Switch the category(Usecase)

// Without desctructing
let temp=first;
first=third
third=temp
console.log(first,third);

// With destructuring
[first,third]=[third,first]
console.log(first,third);

// Destructing of nested arrays
let nums = [2,3,[6,9]]
let [val1,,[val2,val3]]=nums;
console.log(val1,val2,val3);