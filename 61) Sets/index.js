// Example

let itemSet = new Set([1,2,3,1,2,4,5,5,3,2,1])
console.log(itemSet);

console.log(itemSet.size);

console.log(itemSet.has(2));
console.log(itemSet.has(9));
console.log(itemSet.add(10));
console.log(itemSet.delete(10));

// not allowed
console.log(itemSet[0]);

// set are also iterable
for(let item of itemSet){
    console.log(item);
}

// we can also make a set from string
let stringSet= new Set('carlosCoder')
console.log(stringSet);