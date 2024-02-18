const fetchTodos=(callback)=>{
    let request=new XMLHttpRequest();

    request.addEventListener("readystatechange",()=>{
        if(request.readyState==4 && request.status==200){
            callback(undefined,JSON.parse(request.responseText))
        }
        else if(request.readyState==4){
            callback('Data could not be fetched',undefined)
        }
    })


    // set up the request
    request.open("Get","https://jsonplaceholder.typicode.com/todos")

    // sending the request
    request.send()
}

fetchTodos((error,data)=>{
    if(error){
        console.log(error);
    }
    else{
        console.log(data);
    }
})