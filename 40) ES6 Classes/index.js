//  Object oriendted programming

// ES6 classes (They still implement prototypal inheritance behind the scene)

class Car{

    constructor(color,model){
        this.color=color
        this.model=model
    }

    startEngine(){
        console.log('This is start engine method of car class');
    }
}

let honda = new Car('Red',2022)
console.log(honda.__proto__);

//** Important Points
// Classes are not hoisted
// Class are also first class citizens(Pass as an argument or return)
// Classes are executed in strict mode
