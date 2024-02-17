// sorting array using sort method

// By default sort method is used to sort strings
// it firstly convert everything into strings and then sort..

let letters=['d','e','f','a','b']

console.log(letters.sort());

let nums=[2,5,7,-1,-22,43]

console.log(nums.sort()); // unexpected result
// as by it evaluates everything as string

// now how to solve this?

// if a-b < 0 => a < b => A,B (Keep order same)
// if a-b > 0 => a > b => B,A (Switch the order)

nums.sort((a,b)=>{
    if(a<b){
        return -1 // as returning -1 tells the sort function to do nothing
    }

    if(a>b){
        return 1 // it tells that we have to swap them
    }
})

// or we can also right it like this

// ascending order
nums.sort((a,b)=>a-b)
nums

// descending order
nums.sort((a,b)=>b-a)
nums