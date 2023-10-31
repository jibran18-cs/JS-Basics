
//1=> This is the situation where we are printing my name but what if we want to print it multiple times?
//Answer is then we use function
//  function sayMyName(){
//     console.log("J");
//     console.log("i");
//     console.log("b");
//     console.log("r");
//     console.log("a");
//     console.log("n");
//  }
//  sayMyName()


//2=> Function to add two numbers
//Values in the below parenthesis called parameters

// function addTwo(number1, number2){
//    console.log(number1+number2);
// }

// addTwo(5,9) And values in these parenthesis are called arguments
function addTwo(number1, number2){
   return(number1+number2);// Nothing can be executed after the return keyword(Important)
}

//Sometimes we made a common mistake
const result= addTwo(9,6)
// console.log(result);
// if we console the result it will give undefined because function is just printing values not returning

//But if return value than we can print that value


// Otherways of passing values to a functions

function userLoggedIn(username="Adeel"){
    // if(username===undefined){
    //     console.log("Please enter the value");
    // }  username===undefined and !undefined both are equal
    if(!username){
        console.log("Please enter the value");
        return
    }
        return `${username} just logged in `
}
const logIn=userLoggedIn("Jibran")// If we don't give argument to parameter then it's value will be undefined not null
// console.log(logIn);


// How to handle multiple arguments

function multipleArg(...num){
  console.log(num);
}
// multipleArg(200, 300, 400) //We use rest operator (Syntax of rest and spread operator is same . Difference is only usecase)

//How to pass object to a function

// const itemInfo={
//     name:"Oppo",
//     price:"1900"
// }
//  function mobile(item){
//     return console.log(`The price of ${item.name} is ${item.price}`)
//  }
//  mobile({
//     name:"Iphone",
//     price:"19000"
// }) //We can also put object directly in argunents instead of storing it in a variable

//How to pass Array to a function

const itemInfo1=[200, 300 ,600]
 function mobile(item){
    return console.log(`The number at index 0 is ${item[0]} and index 1 is ${item[1]}`)
 }
 mobile([2002, 3003 ,6006]) //We can also put Array directly in argunents instead of storing it in a variable