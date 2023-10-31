//This keyword tells us about current context from where we can access variables from objects



    const obj={
        name:"Jibran",
        age:22,
        message:function hallowen(){
            // console.log(this.age)
            // console.log(this);

        }
    }
    obj.message()
    obj.age= 23
    obj.message() //The function which is written in an object can use this keyword 

// console.log(this); It will give {} empty object 




//We cannot use this keyword in the function directly . We can use it when the fuction is inside an object 
// function coffee(){
//     const name="Jibran"
//     console.log(this.name);
// }
// coffee()
    

// Same as in above function(Can't use this)
// const coffee=function (){
//     const name="Jibran"
//     console.log(this.name);
// }
// coffee()

//Now let's check wether it works with arrow function or not(No)
const coffee= (num1, num2)=>{
    const name="Jibran"
    // console.log(this); It will give {}empty object
    return num1+num2

}
console.log(coffee(4,5))

//Another way to write arrow function
const func= (num1, num2)=> num1+num2 //Implicit return method means we dont have to use return
console.log(func(2, 3))

//But in case of objects we have to use syntax given below

const func2= (num1, num2)=> ({name:"JJ"})
console.log(func2())