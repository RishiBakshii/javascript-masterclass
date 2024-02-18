const fetchData=(resource,callback)=>{
    const request=new XMLHttpRequest()

    request.addEventListener("readystatechange",()=>{
        if(request.readyState==4 && request.status==200){
            callback(undefined,JSON.parse(request.responseText))
        }
        else if(request.readyState==4){
            callback('Could not fetch data',undefined)
        }
    })

    request.open("Get",resource)

    request.send()
}

fetchData('data.json',(err,data)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log(data);
    }
    fetchData("mario.json",(err,data)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log(data);
        }
        fetchData("lurie.json",(err,data)=>{
            if(err){
                console.log(err);
            }
            else{
                console.log(data);
            }
        })
    })
})