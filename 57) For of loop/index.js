let hotel={
    name:"hotel",
    location:"street no xyz delhi",
    categories:['chinese','Italian','English'],
    mainMenu:["FoodA","FoodB","FoodC"],
    starterMenu:['SpecialFoodA',"SpecialFoodB"],
    openingHours:{
        sunday:{open:"9:00AM",close:"10:00PM"},
        monday:{open:"10:00AM",close:"10:00PM"},
        tuesday:{open:"8:00AM",close:"10:00PM"}
    }
}

let menu=[...hotel.mainMenu,...hotel.starterMenu]

console.log(menu);

for(let elem of menu){
    console.log(elem);
}

for(let item of menu.entries()){
    console.log(item);
}
for(let [index,item] of menu.entries()){
    console.log(index,item);
}