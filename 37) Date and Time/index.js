// Date and Time

// Date object always carry both "Date" and "Time"


// Using date method
let currentDate=new Date(1921,5,24,12,30,20)   // year month date // month starts from 0-11 here
console.log(currentDate);


// Using timestamp (integer number represent in "ms" from 1-1-1970)
let date= new Date(0) // jan 1 1970 was the first time in computer world

// here 0 represents a milisecond number that started from 1 jan 1970
date

// to get time in 'ms'
const dateRightNow=new Date().getTime()

// this represents the passed milliseconds from 1 jan 1970 till now
console.log(dateRightNow);
 

// Date and Time methods

let completeDateAndTime=new Date()

console.log(completeDateAndTime);

// get full year
console.log(completeDateAndTime.getFullYear());

// get Month
console.log(completeDateAndTime.getMonth()); 

// Week Day
console.log(completeDateAndTime.getDay());

// Date
console.log(completeDateAndTime.getDate());

// get Hours
console.log(completeDateAndTime.getHours());

// get minutes
console.log(completeDateAndTime.getMinutes());

// get milliseconds
console.log(completeDateAndTime.getMilliseconds());



 