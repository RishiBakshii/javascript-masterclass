// writting "async" means the function will return promise


//* Basic example
// let getTodos = async()=>{

//     let response = await fetch("data.json")  // here await acts like .then()

//     if(response.status!==200){
           // custom error
//         throw new Error('custom error: while reading the json file')
//     }

//     return await response.json()
// }

// getTodos().then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// })


//* More than one data (We dont need to chain anything as previously)
// let getTodos = async()=>{

//     let response1 = await fetch("data.json")
//     let response2= await fetch("lurie.json")

//     let marioData=await response1.json()
//     let lurieData=await response2.json()

//     console.log(marioData,lurieData);
// }

// getTodos()

// * Error handling using Try and Catch Method
let getTodos = async()=>{
    try {
        let response1 = await fetch("data.json")  
        let response2= await fetch("lurie.json")

        let marioData=await response1.json()
        let lurieData=await response2.json()
        console.log(marioData1,lurieData);
    } 
    catch (error) {
        console.log(error.message);
    }

}

getTodos()


