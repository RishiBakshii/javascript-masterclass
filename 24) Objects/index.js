// Introduction to objects in javascript

let car={
    color:"black",
    model:"2022",
    company:"Honda"
}

console.log(car);

// Accessing the javascript objects properties
console.log(car['company']);
console.log(car['model']);

let propertyName='color';

// computed version
console.log(car[propertyName]);

// Modify the object
car.color='edited color'
console.log(car.color);

// Delete properties of object
delete car.model  // it always returns true
console.log(car);