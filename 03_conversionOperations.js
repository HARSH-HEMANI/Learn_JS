let score = 33

// console.log(typeof score);
// console.log(typeof(score));

let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

//"33" --> 33
//"33abc" --> NaN (not a number )

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

// "" --> false
// ..james --> true

let someNumber = 33

let stringNumber= String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

// ************ operations ****************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2/3);
// console.log(2**3);
// console.log(2%3);

let str1 = "hello"
let str2 = " James"

let str3 = str1 + str2 // string concatination
// console.log(str3);

// console.log("1" + 2); //12
// console.log(1 + "2"); //12
// console.log("1" + 2 + 2); //122 -- prefered type is string, concates
// console.log(1 + 2 + "2"); //32 -- because prefered type is integer than concates with string

let counter = 10
counter++; // precedence operator (postfix)
console.log(counter);

/*
prefix -- executed first , ++counter
postfix -- executed after , counter++
*/
