// set item

localStorage.setItem("age","19")

// get item
localStorage.getItem("age")

// update item
localStorage.setItem("age",'21')

// remove item
localStorage.removeItem("age")

// clear local storage
localStorage.clear()

// storing complex data in local storage
const vehicles=[
    {company:"Honda",name:"City"},
    {company:"Ford",name:"Endavour"}
]

// we have to stringify the data before storing it
localStorage.setItem("vehicle",JSON.stringify(vehicles))

// and parse the data at the time of accessing it
const data=JSON.parse(localStorage.getItem("vehicle"))

