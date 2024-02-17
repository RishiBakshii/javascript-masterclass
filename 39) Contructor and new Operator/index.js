// Object Oriented Programming

// Constructor function and the "new" operator

// We can not use "arrow" function as constructor

// Call "constructor" function using "new" keyword

// 1 new {object} created empty initially
// 2 "this" = {object}
// 3 object linked to prototype
// 4 function automatically return {object}

let Car = function(color,model){
    // instance properties
    this.color=color;
    this.model=model

    // note a good practice to create function inside another function so to solve this 
    //** we use something called as "Prototype"
    // it is called method
    this.login=function(){
        console.log('login method');
    }
}

let instanceOfCar = new Car("yellow",2022)
console.log(instanceOfCar);

let instance= new Car("black",1995)
console.log(instance);

console.log(instanceOfCar instanceof Car);


// PROTOTYPE
// it is only present in "[constructor functions]"
// each object created by "constructor" function have an access 
// to all "methods" present inside that "constructor" prototype

let Train = function(color,model){
    this.color=color;
    this.model=model;
}

// now instead of decalaring function inside another function 
// we will now declare its function in Train.prototype

Train.prototype.startV12Engine=function(){
    console.log("This is start engine method!");
}

console.log(Train.prototype);

// now in all instances of Train this method will be avaible which is known as "prototypical inheritance"

const instanceOfTrain=new Train('black',1989)
instanceOfTrain.startV12Engine()

// when we want to see what is the prototype of an objects' constructor we can use this method on instance
console.log(instanceOfTrain.__proto__)

// if we want to see direclty on constructor function then we can use this
console.log(Train.prototype)

// We can also set "properties" to prototype
Train.prototype.company="IRCTC"

console.log(instanceOfTrain.company);

// we can also perform a check on prototype to see if that is the protype of instance or not
console.log(instanceOfTrain.__proto__.isPrototypeOf(instanceOfTrain));

// In this case it will return false becaause Train itself is not created from this prototype
// Train.prototype is prototype of all objects created through the Train constructor
console.log(Train.prototype.isPrototypeOf(Train));

let arr=[2,3,5,7,8] // [] is same as new Array([])
console.log(arr.__proto__,Array.prototype);

// Chaining of prototype ( this will chain until we reaches null)
console.log(arr.__proto__.__proto__)

// it will be a last level protype just above null as most of the thigns in javascript 
// are created through object prototype
console.log(Object.prototype);