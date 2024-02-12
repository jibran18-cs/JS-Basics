// Javascript have prototypel behavior (means it goes to every layer to get the information until it found null) In arrow functions 'this' keyword does not work
// Prototype give the access of 'this', 'new' , classes and prototypal inheritance


//Every thing in JS is object wether it is string, array or function

// Let's check wether function is object or not

function multiplyBy5(val) {
    const value= val*5
    return value
}
console.log(multiplyBy5(5));
console.log(multiplyBy5.power=2);
console.log(multiplyBy5.prototype);
//Yes function is also an object



// As we can access some mehtods of array like map() can we create our own methods in function and aslo access it? Answer is Yes. This how

function user(username, score){
  this.username=username
  this.score=score
}
user.prototype.increaseScore= function(){
    console.log(this.score+1)
}
user.prototype.printMe=function(){
    console.log(`Hello ${this.username}`);
}
const chai=new  user('chai', 25)
const tea= new user('tea', 250)

chai.printMe()
tea.printMe()
chai.increaseScore()


/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/


//Now we are starting prototype
/*Here we have one of my favorite concept of inheritance previously we added methods to function by it's name
1=>But we can add methods in Object directly which is parent of array, function and everything so if we add method to Object arrays and functions
can inherit those mmethods 
2=>We can also add methods to arrays functions seperately but it cannot be accessed by object 
*/

let heros=['Hulk', 'Thor']
let myHeros={
    Superman:'Fly',
    Spiderman:'Sling',

    generateMethod:function(){
        console.log(`Here we ${this.Superman}`);
    }
}
/*We can add method to array and the object like this heros.prototype.method=func and myHeros.prototype.method=func but if we want to create a method and want to
access it both in array and object we can do it by following way
*/

Object.prototype.jibran=function(){
    console.log('Print my name');
}

heros.jibran()//In both cases we can access jibran method
myHeros.jibran()

//Now lets check if give nethod to array or function how it will behave 

Array.prototype.myName=function(){
    console.log('Dont print my name');
}
//myHeros.myName() Cannot access 
//heros.myName() Here we can access

/*
function--------------->

Array------------------>   {Object} ---------------> null

string----------------->
*/