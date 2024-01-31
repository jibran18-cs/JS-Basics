//Numbers
let aNum= 84
// console.log(typeof aNum)

const anotherNum= new Number(176.775984)
// console.log(anotherNum.toString().length );  string method =>

// console.log(anotherNum.toFixed(2));  toFixed=> In case ecommerce website precsion value sometimes become bigger so we use that till how much we want to fix it

const newNum= 838.989
// console.log(newNum.toPrecision(4));toPrecision=> Returns a string . And it will give precise value to the number we mentioned in brackets in this case this value 
//will be precise upto number 4 means till 9

const thousnds=10000000
// console.log(thousnds.toLocaleString('en-IN')); LocaleString=> somtimes we have numbers which are difficult to judge and deal with
//so localestring help us deal with it by putting comma b/w numbers


// +++++++++++++++++++++Maths++++++++++++++++++++++++++++++++++
// const mathNum= 66
// console.log(Math.round(Math.sqrt(mathNum)))
// console.log(Math.round(4.6))
// console.log(Math.ceil(4.2))
// console.log(Math.floor(4.9))
// console.log(Math.max(4,0,9,3))
// console.log(Math.min(4,0,9,3))
// console.log(Math.abs(-5));
// Important
// console.log(Math.random()) Value of Math.random will always be between 0 and 1
// console.log((Math.random()*10)+1) This will give value b/w 1 and 10

//If we want to specify a number we want b/w certian range then we heve to use the fomula given below
let min= 10
let max= 20
console.log(Math.floor(Math.random()*(max-min+1)+min))
console.log(Math.floor(Math.random()*6 + 1))