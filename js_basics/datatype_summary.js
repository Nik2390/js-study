// # Primitive Datatypes

// 7 types  : String, Number, Boolean, null, undifined, symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null 
let userEmail;

const id = Symbol('1234')
const custmerId = Symbol('1234')

//console.log(id === custmerId);

const bigNumber = 3111212212122121n

// Refrence Types (Non Primitives datatypes)

// Array, Objects, fucntion  

const heros = ["Iron Man", "Super Man", "Bat Man"];
let myObj = {
    name : "Nikhil",
    age : 22,
    gender : "male"
}

const myFunction = function(){
    console.log("Hello World")
}
