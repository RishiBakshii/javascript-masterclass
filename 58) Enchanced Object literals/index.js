// Before ES6 VS after ES6

const menuType='ultra-rich'

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
    //* before
    // openningHours:openningHours

    // order:function(){

    // }


    //* after
    openningHours,
    order(){
    },

    // if i want that my property name should be computed and should act like a variable
    // then this syntax [keyName] can be used after es6

    [menuType]:['some good food items']
}

console.log(hotel);