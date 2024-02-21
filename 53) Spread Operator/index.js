// Spread Operator (Unpacking of array elements)

let hotel={
    name:"hotel",
    location:"street no xyz delhi",
    categories:['chinese','Italian','English'],
    mainMenu:["FoodA","FoodB","FoodC"],
    openingHours:{
        sunday:{open:"9:00AM",close:"10:00PM"},
        monday:{open:"10:00AM",close:"10:00PM"}
    }
}

let nums=[1,2,3,4]
console.log(...nums);

// UseCase
let newArray= [9,10,11,12,...nums];
console.log(newArray);

let updatedMenu=[...hotel.mainMenu,"Burger"]
console.log(updatedMenu);

// Join2 arrays
let joinedArray=[...nums,...newArray]
console.log(joinedArray);

// spread operator creates shallow copy

// We can also use spread operator on strings
const profile='fullStackDeveloper'
console.log(...profile);
