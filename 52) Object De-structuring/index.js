// Destructuing of "Objects"

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

//* destructing the object properties
// const {name,location,categories}=hotel
// console.log(name,location,categories);

//* Set customize name to object property
// let {name:hotelName,location:hotelLocation,mainMenu:menu}=hotel
// console.log(hotelLocation)

//* Setting default Values
// let {name,Menu=[],categories}=hotel

// * and we can also set custom name here also
// let {name,Menu:newMenu=[],categories=[]}=hotel

// console.log(name);
// console.log(newMenu);
// console.log(categories);

//* Destructing nested objects
let {name,openingHours}=hotel
console.log(name,openingHours);

// * in this only the open and close are getting extracted not sunday itself
let {sunday:{open,close}}=openingHours

console.log(open,close);


