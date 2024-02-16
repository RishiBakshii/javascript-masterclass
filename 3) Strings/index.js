// ** Important Note: Strings are immutable and these methods dosen't mutate the original string!

// Strings
console.log("Hello Coders");

let firstName="Wow";
let lastName="Programmer"
console.log(firstName,lastName);

// String concatination

// Method 1 Using + Operator

let fullName= firstName + " " + lastName
console.log(fullName);

// Method 2 Using Template literals
let newFullName=`${firstName} ${lastName}`
console.log(newFullName);

// Getting string character
console.log(firstName[0]);

// String methods
console.log(firstName.toUpperCase());
console.log(lastName.indexOf("o"));   // if there are multiple same characters it tells the index of the first occuring

// Common string methods
let hobbies=' coding reading running '
hobbies

// Trim
let result=hobbies.trim()
console.log(result);

// index Of
console.log(result.indexOf("d"));

// last index of
console.log(result.lastIndexOf("d"));

// includes method
console.log(result.includes("reading"));

// slice method
fullName='helloWorld'
console.log(fullName.slice(0,3)); // 3 is exclusive , as it will only return till 2nd index

// split method
let favoriteColors="Brown Blue Black Gray"
let arrColors=favoriteColors.split(" ")
console.log(arrColors);

// Strings are immutable
let str='hello'
console.log(str[0]);
str[0]='p'
console.log(str);





