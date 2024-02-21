// falsey values are 0,null,false,undefined,''(empty string) for || operator

let numsGuests=0
const result=numsGuests || 10
console.log(result);

// For nulling coalesing operator (??) only "null" and "undefined" are falsy value

let result2=numsGuests ?? 10
console.log(result2);  // 0 is not a nullish value in this case of "??"

//  it returns first non-nullish value