//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*Meamory in JavaScript is of 2 types 
1-Stack   (This is allocated to primitive datatypes)
2-Heap    (This is allocated to non-primitive datatypes)
*/

// Primitive dataTypes
//7-- number, null, bolean, bigInt, string, symbol, undefined
let myChannel = "JibranDahadotcom"
let myNewChannel = myChannel
myNewChannel= "Jibran@jj.com"
console.log(myChannel);
console.log(myNewChannel);
/* When a primitive data is accessed from stack it is just a copy of 
original data and when we make changes in that copy of data it does not effect the original data */

//Non-primitive dataTypes
//3--Array, Function, Object

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

/*Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object
        */

       //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

       /*
       JavaScript is a dynamically typed language. This means that variable types are determined at runtime, and you do not need to explicitly declare the type of a variable before using it. You can assign different types of values to a variable during its lifetime.

       For example, in JavaScript, you can do the following:

       let x = 10; // x is now a number
       x = "Hello"; // x is now a string
       x = true; // x is now a boolean
       On the other hand, statically typed languages require you to declare the variable's type explicitly, and the type checking is done at compile-time, before the code is executed.

       Languages like Java, C++, and TypeScript are statically typed, and they require you to specify the variable type explicitly when declaring them:

       int x = 10; // x is a variable of type int
       String name = "John"; // name is a variable of type String
       JavaScript's dynamic typing allows for more flexibility but can lead to potential runtime errors if not handled carefully. Static typing, on the other hand, provides better type safety at the cost of some initial verbosity and strictness.

 */