fetch("data.json").then((response)=>{
    console.log(response);
    return response.json() // it also returns promise
}).then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
})