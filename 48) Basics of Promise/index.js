// Promise general example

// let getSomething =()=>{

//     return new Promise((resolve,reject)=>{

//         resolve("Some data")

//         reject("Some Error")
//     })

// }

// getSomething().then((data)=>{
//     console.log(data);
// }).catch((error)=>{
//     console.log(error);
// })

// Promise Practical example
const fetchTodos=(resource)=>{

    return new Promise((resolve,reject)=>{

        const request=new XMLHttpRequest()

        request.addEventListener("readystatechange",()=>{
            if(request.readyState==4 && request.status==200){
                resolve(JSON.parse(request.responseText))
            }
            else if(request.readyState==4){
                reject("Some error occured while fetching data")
            }
        })

        request.open('Get',resource)

        request.send()
    })
}


// Chaining of promises

// ** drawback ** here the catch method will only be able catch the first and only error
//** and if we want to catch individual and multiple error then we can't do that


fetchTodos("lurie.json").then((data)=>{
    console.log('Promise 1 resolved');
    console.log(data);
    return fetchTodos("mario.json")
}).then((data)=>{
    console.log('Promise 2 resolved');
    console.log(data);
}).catch((error)=>{
    console.log(error);
})
