//In JavaScript, scope refers to the context in which variables and functions are declared and accessed.
// There are two main types of scope in JavaScript
/* 1=>Global Scope:
Variables and functions declared in the global scope are accessible from anywhere in your code.*/
/*Local Scope:
Variables and functions declared within a specific code block, function, or object are considered to be in a local scope*/


var c=400 // This value will not logged . That's we dont use var .
let a=200
{
    let a=2
const b=3
var c=4
// console.log('inner' , a);
}
// console.log(a);
// console.log(b);
// console.log(c);
// console.log('outer' , a);
// let and const are block scoped and var is global scoped

//We can access the global vlaue within block but we can't access block value in global scope



//++++++++++++++++++
//Only child can access the value of parent . Parent can't access the value of child 
function addOne(){
    const num1=50
    function addOne1(){
        const num2=100
        // console.log(50);
    }
    addOne1()
    // console.log(num2);
}
addOne()

//Same in the case of other block like if else


if(true){
    const name = "Jibran"
    if(name==="Jibran"){
        // const name2= "Adeel"
        // console.log(name+name2);
    }
    // console.log(name);
}
// console.log(name);



// ++++++++++++Intersting+++++++++++++++++++

console.log(addone(5))
function addone(num){
   return num+1
}
console.log( addtwo(5)) //we cannot access it because it is wrapped in a const
const addtwo= function (num){
   return num+2
}