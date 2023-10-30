//There are two ways of declaring objects
//1=> Through Constructor (It makes the singelton)
// Object.create

//2=> Through Object literals(It does not make singelton)

const mysymbol= Symbol("key1")
const userObj= {
    name:"Jibran",
    [mysymbol]:"key1",
    age:20,
    location: "BWP",
    mail:"jibee@google.com",
    isLoggenIn:true

}
//We can access objects in two ways 1=> By using obj. 2=> By using [""]
//We should prefer later method because somtimes we have key like "first name" which we can only access through second method

// console.log(`Hello ${userObj.name}`);
// console.log(`Your mail is ${userObj.mail}`);
// console.log(`Your loction is ${userObj["location"]}`);

//Interview Question: Print a symbol by accessing it through object
// Object.freeze(userObj)

//+++++++++++++++++++++++++++++++++++
// userObj.location= "Ldr"
// console.log(userObj);
// console.log(typeof (userObj[mysymbol])); 
// //If we want to make object immutable then we have to use Object.freeze()
// userObj.location= "Kri"
// console.log(userObj);


userObj.greetings= function(){
    console.log(`Hi ${userObj.name} your age is ${this.age}`);
}
console.log(userObj.greetings());