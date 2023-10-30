// How to merge two objects
//1=> Using assign mehtod

const obj1= {1:"a",2:"b"}
const obj2= {3:"c",4:"d"}
const obj3= Object.assign({},obj1,obj2)
// console.log(obj3)

//2=> Spread opertator
// console.log({...obj1, ...obj2})

//Most of the time we will se a data like written below 
let pandaUser= [
    {
        mail:"j@gmail.com",
        isLoggedin:false
    },
    {
        mail:"jb@gmail.com",
        isLoggedin:false
    },
    {
        mail:"jj@gmail.com",
        isLoggedin:false
    },
]
//Now how can we access the value of array of objects

// console.log(pandaUser[0].mail);

//How to access keys or values of objects 

const User= {
    name:"Jibran Jaffar",
    age: 20,
    course:"CS"
}

console.log(Object.keys(User))// Accesing keys and its output's datatype is array so we can loop through it **Important
console.log(Object.values(User))// Accesing values and its output's datatype is array so we can loop through it **Important
console.log(Object.entries(User))

//To check wether a value is present in object or not
console.log(Object.hasOwnProperty("nam"));

//++++++++++++++Object Destructure++++++++++++++++++++

const Person={
    name:"Adeel",
    age:22,
    job:"3D modeler"
}
//We can access the itmes in objects using . and [] mehtod but sometimes it is convineint to use destructuring

const {name, age, job}= Person
console.log(`Hello my name is ${name} and I am a ${job}`);

// Disscusion about API and JSON and some impotant online tools

// {
//     "name":"Adeel",
//     "age":22,
//     "job":"3D modeler"
// } This is a JSON format (Mostly we see API's in this format)


// [
//     {},
//     {},
//     {},
//     {},
// ] This is another format