//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*Meamory in JavaScript is of 2 types 
1-Stack   (This is allocated to primitive datatypes)
2-Heap    (This is allocated to non-primitive datatypes)
*/

// Primitive dataTypes
let myChannel = "JibranDahadotcom"
let myNewChannel = myChannel
myNewChannel= "Jibran@jj.com"
// console.log(myChannel);
// console.log(myNewChannel);
/* When a primitive data is accessed from stack it is just a copy of 
original data and when we make changes in that copy of data it does not effect the original data */

//Non-primitive dataTypes

let myAccount={
    name:"Jibran",
    age:"21",
    mail:"jjGoogle@gmail.com"
}
let myNewAccount = myAccount
myAccount.mail="Jibran@gmail.com"
console.log(myAccount)
console.log(myNewAccount)
/* When a primitive data is accessed from heap it is refrence  of 
original data means it is original data itself and when we make changes it also changes original data */
