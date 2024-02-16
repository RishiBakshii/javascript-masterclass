// this keyword

// In Each method we have an access of special keyword called this

// this keyword represent the object 'Calling' the mehtod in which 'this' is present

// Example
let person={
    firstname:"Rishi",
    lastName:"Bakshi",
    gender:"Male",
    city:"Delhi",
    birthYear:1987,
    education:"Software Engineer",
    getSummary:function(){
        console.log(this);
        return `${this.firstname} ${this.lastName} lives in ${this.city}. ${this.gender==='Male'?"He":"She"} was born in ${this.birthYear} and is a ${this.education} by profession`
    }
}

console.log(person.getSummary());