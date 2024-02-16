let dishes= ['Biryani', "Chat", 'Paranthay'];

// Access
console.log(dishes[1]);

// modify the array
dishes[0] = 'Tikki'
dishes

// Array methods
console.log(dishes.join(' '))

// indexOf
console.log(dishes.indexOf('Tikki'));

// Concat method
let newDishes= ['Pani Puri', 'Pizza']
console.log(dishes.concat(newDishes))

// length method
console.log(newDishes.length)

// mutator methods

// push method
console.log(newDishes.push("Momos")); // returns new length of the array 
newDishes

// pop method
newDishes
console.log(newDishes.pop())