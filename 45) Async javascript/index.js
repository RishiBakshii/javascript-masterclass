// Making HTTP request (Example)

// HTTP response status codes

// Information responses (100-199)
// Successful responses (200-299)
// Redirection Messages (300-399)
// Client error responses (400-499)
// Server error responses (500-599)

let request=new XMLHttpRequest();

request.addEventListener("readystatechange",()=>{
    if(request.readyState=4 && request.status==200){
        console.log(JSON.parse(request.responseText));
    }
})


// set up the request
request.open("Get","https://jsonplaceholder.typicode.com/todos")

// sending the request
request.send()


// VALUE    STATE      DESCRIPTION
// 0     -> UNSENT  -> Client has been created open() not called yet
// 1     -> OPENED  -> open() has been called
// 2     -> HEADERS_RECEIVED -> send() has been called, and headers
// 3     -> LOADING Downloading; ->  responseText holds partial data
// 4     -> DONE    -> The operation is complete // at this stage the we can extract the received data