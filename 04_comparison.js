// gives true or false

console.log(2>1);
console.log(2 >= 1);
console.log(2 > 1);
console.log(2 == 1);
console.log(2 != 1);


console.log("2" > 1);  
console.log("02" > 1);
// gives true in both cases because JS converts it into a number
// bad practise -- always compare same datatypes


console.log(null > 0); //false
console.log(null == 0); //false
console.log(null >= 0); //true

/* here, an equality check == and comparisons > < >= <= work diffrently
Comparisons convert null to a number, treating it as 0. 
That's why null >= 0 is true and null> 0 is false */

console.log(undefined == 0); //false
console.log(undefined > 0); //false
console.log(undefined < 0); //false

// strict equality check ( === ) -- checks values and datatype both
// loose equality check ( == ) -- checks values only
console.log("2" === 2); //false
