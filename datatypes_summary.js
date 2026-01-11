/*
// premitive 

they are generally call by value. Here, copy of the actual data is used.
changes are done in copy

7 types : 
String,
Number,
Boolean -- true/false, 
null -- means empty yet non zero, 
undefined -- means variable is declared but value is nor assigned, 
Symbol -- to show unique values 
BigInt -- big values are stored in BigInt

JavaScript is dynamically typed language, that we don't need to explicitly declare the data type of a variable  


// Reference type / Non-premitive

call by refrence.
Array ([]), Object({}), Functions(){}

*/

const score = 100
const scoreValue = 100.3 // both score and scorevalue are number

const isLoggedIn = false
const outsideTemp = null // datatype -- object 
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log( id === anotherId); //false

const bigNumber = 321548978945613245789465132


const heros = ["shaktiman", "naagraj", "doga"]
let myObj ={
    name : "hitesh",
    age: 22
}

const myFunction = function(){
    console.log("Hello! World...");    
}

// console.log(typeof <varibalename>); to check datatype of any variable

console.log(typeof myFunction); //object


/*

type of val         Result

Undefined           "undefined"
Null                "object"
Boolean             "boolean"
Number              "number"
String              "string"
non-premitives are all objects
*/


