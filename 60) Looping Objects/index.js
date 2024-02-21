let openningHours = {
    sunday: { open: "9:00AM", close: "10:00PM" },
    monday: { open: "10:00AM", close: "10:00PM" },
    tuesday: { open: "8:00AM", close: "10:00PM" },
  };
  
let hotel={
    name:"hotel",
    location:"street no xyz delhi",
    categories:['chinese','Italian','English'],
    mainMenu:["FoodA","FoodB","FoodC"],
    starterMenu:['SpecialFoodA',"SpecialFoodB"],
}

// Keys(Properties)
let properties = Object.keys(openningHours)
console.log(properties);

for(let key of properties){
    console.log(key);
}

// Values
let values = Object.values(openningHours)
console.log(values);

// Complete Object
let entries= Object.entries(openningHours)

console.log(entries);

for(let [key,{open,close}] of entries){
    console.log(`On ${key} restraunt open on ${open} and closes on ${close}`);
}