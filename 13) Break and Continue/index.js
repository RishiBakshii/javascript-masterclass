// they are also called jump statements

// Continue
// used to skip some iterations of loop

// for(let i=0;i<10;i++){
//     if(i==2){
//         continue;
//     }
//     console.log(`the value of i is ${i}`);
// }

// Break
// it is used to terminate the loop and tranfer control outside the loop
for(let i=0;i<10;i++){

    if(i==5){
       console.log(`found the desired value i.e ${i}`);
       break;
    }
    console.log(`the value of i is ${i}`);
}
