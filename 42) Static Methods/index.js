// static methods (method which is not present on constructor 
// "prototype" property but "constructor" itself

class Car{
    constructor(model,year){
        this.model=model
        this.year=year
    }

    startEngine(){
        console.log('This is the start engine method');
    }
}

// static method
Car.break=function(){
    console.log('this is the break method of car');
}

let Honda=  new Car("2023","black")
Honda.startEngine()

// Honda.break()
Car.break()


// Example of static methods are
JSON.parse()
Number.parseInt()
Array.from()