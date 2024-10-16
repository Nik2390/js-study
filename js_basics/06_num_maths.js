const score = 500

const balance = new Number(500)

//console.log(score);
//console.log(balance);

//convert number into string

//console.log(balance.toString())

//for precision value or after . values used toFixed
// maximum used in ecommerce websites

//console.log(balance.toFixed(2));

// precision value used for round figure a values

const otherNumber = 23.25445

//console.log(otherNumber.toPrecision(3));

//for proper display a amount like indian rupess or other
const prices = 1000000
//console.log(prices.toLocaleString('en-IN'));


//---------------------- Maths --------------
// console.log(Math)
// console.log(Math.abs(-4));
// console.log(Math.round(3.6));

//get the min value from array

// console.log(Math.min(3,4,5,1));
// console.log(Math.max(3,4,5,1));

// console.log(Math.random())

// the value is in 0.5644656 but we want in 1 to 9 not 0
console.log(Math.random()*10)

//but value must be 0.014 mean 0 to 1 then for this
console.log(Math.floor((Math.random()*10)) + 1);


const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)
