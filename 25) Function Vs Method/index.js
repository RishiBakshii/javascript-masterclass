// Function vs Method

// Method -> It is nothing but object property (Key) holding a function as a value

let person={

    calculateAge:(birthYear)=>{
        console.log(`the current age of the person is ${2023-birthYear}`);
    }
}

person.calculateAge(2004)