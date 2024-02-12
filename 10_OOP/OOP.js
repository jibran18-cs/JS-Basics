//Object literal is basic unit in JS

// const user={
//     username:'Jibran',
//     logInCount:8,
//     isSignIn:true,

//     getUserDetails: function(){
//         // console.log('Got user details from database');
//         //console.log(`Username: ${username}`); It will not work. Because we have to use "this" to mention the current context
//         //console.log(this); It will give the current context 
//         console.log(`Username: ${this.username}`); 
        
//     }
// }
// console.log(user.username);
// console.log(user.getUserDetails())
//console.log(this); It will give current context which in this case is global. (Do console.log(this) in console as well it will give window object)


// => Constructor function(Constructor function gives new instance/copy everytime and what ever we do with it will not effect original values)
// step1=>When we use 'new' keyword an empty object will be created which is called instance 
// step2=> A consturctor function is called due to 'new' keyword
// step3=> All arguments injected in 'this' keyword
// step4=> We can use them in functions


function user(username,logInCount, isSignIn) {
    this.username=username;// On the left of = sign we have variable and on the right we have value
    this.logInCount=logInCount;
    this.isSignIn=isSignIn

    // return this
}
// const userOne=user('Jibran', 12, true)
// const userTwo=user('JS', 10, true)
// console.log(userOne);
//Here userTwo will overwrite the vlaue of userOne that's why we use new keyword to make new instance and avoid override

const userOne=new user('Jibran', 12, true)
const userTwo=new user('JS', 10, true)
console.log(userOne);
console.log(userTwo);
//console.log(userOne.constructor); It will give the refrence of constructor function

//We can also check that is userOne and userTwo are instance of user or not. We will do it in following manner
console.log(userOne instanceof user);//Output will be true
console.log(userOne instanceof Object);//Output will be true
console.log(userTwo instanceof user);//Output will be true
console.log(userTwo instanceof Object);//Output will be true

