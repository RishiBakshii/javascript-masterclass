// Call and apply method
// We can manually set the value of "this" keyword using "call and apply"

const mailPlane={
    airline:"Fly India",
    iatacode:'FI',
    bookings:[],
    book:function(name,flightNum){
        console.log(`${name} Booked flight on ${this.airline} with flight numbe ${this.iatacode}${flightNum}`);
        this.bookings.push({flightName:this.airline,name:name,flightNum:`${this.iatacode}${flightNum}`})
    }
}


mailPlane.book('Carlos',456)
mailPlane.book('John',666)

console.log(mailPlane);

const childPlane={
    airline:"Child Plane",
    iatacode:'CP',
    bookings:[],
}

console.log(mailPlane.book);

let book=mailPlane.book;

// book(655,"Lurie")

// Solution
// using 'call' method

book.call(childPlane,'Britty',402)
console.log(childPlane);

book.call(mailPlane,'Louis',800)
mailPlane

// Apply Method (this is same as apply method but in this we have to give the arguments inside and array)
book.apply(childPlane,['Rishi',600])

// Bind Method
function greet(){
    console.log(`Welcome ${this.firstName} ${this.lastName} on the dinner`);
}

let user={
    firstName:"John",
    lastName:"Paul"
}

const bindedGreet=greet.bind(user)

bindedGreet()