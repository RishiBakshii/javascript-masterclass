// Getters and setter allow you to define object accessors (Computed Properties)

class Car{

    constructor(color,model){
        this.color=color
        this.model=model
    }

    startEngine(){
        console.log('This is start engine method of car class');
    }

    get _startEngine(){
        console.log('this is start engine method using get');
    }

    get description(){
        return `Color of this Bike is ${this.color} and it's model is ${this.model}`
    }
    set changeColor(color){
        this.color=color
    }
}

let honda= new Car('black',2024)
honda.startEngine(); // accessing as a function

honda._startEngine; // accessing as a property

honda.changeColor = "blue"
console.log(honda.description)
