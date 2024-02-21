// Lets suppose we want to check this hotep open on saturday or not
// if open then at what time?

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

// here this will return saturday as it dosent exists
console.log(hotel.openingHours.saturday);

// but the issue is when we try to put a property on saturday then it gives error
// Cannot read properties of undefined (reading 'open')
// console.log(hotel.openingHours.saturday.open);

// so there are 2 ways to avoid this

if(hotel.openingHours && hotel.openingHours.sunday){
    console.log(hotel.openingHours.sunday.open);
}

// With optional chaining
console.log(hotel.openingHours?.saturday?.open);

// Checks previous valie of the operator => null or undefined
// return undefined