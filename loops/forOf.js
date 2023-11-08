//+++++++++++for-of loop
// let arr=[1,2,3,4,5]
// for (const num of arr) {
//     console.log(num);
// }
// let str="Hello World!"
// for (const chr of str) {
//     console.log(chr);
// }

//Map : Map is an object it is iterable for for-of loop and does not conatin the a duplicate of values

let map= new Map()
map.set("name", "Jibran")
map.set("age", 20)
map.set("role", "SE")

// for (const [keys, vals ] of map) {
//     console.log(keys,vals);
// }

let obj={
    "name": "Jibran",
    "age": 20,
    "role": "SE"
}

// for (const [keys, vals ] of obj) {
//     console.log(keys,vals);
// }//It will give an error as object in case of for-of is not iterable

//++++++++++++++++++++++++++++ for-in loop ++++++++++++++++++++++++++++
let object={
    "js": "javascript",
    "py": "python",
    "java": "java"
}
// for (const key in object) {
//   console.log(`${key} stands for ${object[key]}`);
    
// }

let names=["Adeel", "Jibran", "Khan"]

// for (const chr in names) {
//    console.log(names[chr]);// Gives values
// }

let map1= new Map()
map.set("name", "Adeel")
map.set("age", 22)
map.set("role", "CS")

for (const key in map1) {
   console.log(key);
}// we cannot iterate map using for-in loop