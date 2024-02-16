// scope => area where variable is defined or accessible

let score=50

if(true){
    let score=49
    console.log(`the value of score is ${score}`);
}

console.log(`outside value of score is ${score}`);