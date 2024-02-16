let password='qwerty'

// AND &&
if(password.length>5 && password.includes("@")){
    console.log('password is strong');
}
else{
    console.log('Change Your Password');
}

// OR ||
if(password.length>5 || password.includes("@")){
    console.log('password is strong');
}
else{
    console.log('Change Your Password');
}

// NOT !
let result=false

if(!result){
    console.log(`Your result is = ${result}`);
}

// Priorities
// Not
// And,OR From left to right

let boolResult= true && true || false && !false
console.log(boolResult);
