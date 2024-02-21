// Rest pattern and paramter

let hotel={
    name:"hotel",
    location:"street no xyz delhi",
    categories:['chinese','Italian','English'],
    mainMenu:["FoodA","FoodB","FoodC"],
    openingHours:{
        sunday:{open:"9:00AM",close:"10:00PM"},
        monday:{open:"10:00AM",close:"10:00PM"},
        tuesday:{open:"8:00AM",close:"10:00PM"}
    }
}

// Spread(...) it is present in the RHS of '='
let nums=[2,3,4,5,6]
let newArray=[1,...nums]
console.log(newArray);

// Rest(...) it is used in the LHS of '='
// get elements and pack them into array
let [a,b,...others]=nums

console.log(others);

// Objects
let {sunday,...weekDays}=hotel.openingHours

console.log(sunday,weekDays);