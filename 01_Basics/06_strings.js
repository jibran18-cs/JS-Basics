let str1= "Hello "
let str2= "world!"
// console.log(str1+str2)

// If we want to add strings and other datatypes then we use string interpolation(means injecting variables in strings)
const name= 'Jibran'
let age= 21
// console.log(`Hello my name is ${name}  and my age is ${age}`);

//The advantage of using the above syntax is we can use different methods on the go like see in following example

// console.log(`Hello my name is ${name.toUpperCase()}  and my age is ${age}`);



//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Methods of string
// Some of the most important methods of String are 1-substring() 2-Slice() 3-Trim() 4-indexOf() 5-Replace() 6-include()
// if you want to see all methods of string then console.log(new String('Jibran')) in console
const myStr= new String("hitesh-hc")
//1=> The substring() method of String values returns the part of this string from the start index up to and excluding the end index, or to the end of the string if no end index is supplied

// console.log(myStr.substring(0,3));
// console.log(myStr);

// 2=> The slice() method of String values extracts a section of this string and returns it as a new string, without modifying the original string.
// The main difference b/w substring and slice is that we can use negative values in slice but not in substring

console.log(myStr.slice(-9,2));
console.log(myStr);

// 3=> The trim() method of String values removes whitespace from both ends of this string and returns a new string, without modifying the original string.

const greeting = '   Hello world!   ';

// console.log(greeting);
// Expected output: "   Hello world!   ";

// console.log(greeting.trim());
// Expected output: "Hello world!";

// 4=>The indexOf() method of String values searches this string and returns the index of the first occurrence of the specified substring. It takes an optional starting position and returns the first occurrence of the specified substring at an index greater than or equal to the specified number.

const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';

const searchTerm = 'dog';
const indexOfFirst = paragraph.indexOf(searchTerm);
// console.log(indexOfFirst);

// 5=> Replace

const myName= "Jibran Daha"
// console.log(myName.replace("Daha", "Jaffar")); 
//6=> Include
// console.log( myName.includes("Daha"));

console.log(myName.split(' '));