/*
1=>The forEach() method is an iterative method that calls a callback function once for each element in an array in ascending-index order.
2=>The callback function takes three arguments: the current element, the index of the current element, and the array itself.
3=>The forEach() method does not modify the array on which it is called, but the callback function can.
4=>The forEach() method is typically used to perform side effects, such as logging each element of an array or modifying each element of an array
*/

const lang=["javascript", "pyhton", "ruby", "swift"]


//We can use simple function without name
// lang.forEach(function (items, index, arr){
//   console.log(items, index, arr);
// })


// We can also use arrow function
// lang.forEach((items, index, arr)=>{
//   console.log(items, index, arr);
// })

// We can access the function which is defined outside forEach

// let coding= (items, index, arr)=>{
//     console.log(items, index, arr);
//   }
// lang.forEach(coding)


//+++++++++++++++++ Important ++++++++++++++++++++++++
// How we can access the items of object which is wrapped in an array(This is mostly used while working with the databases)

// let obj={
//     language:"javascript",
//     fileName:"js"
// }
// console.log(obj.fileName); 
//This how we can access object items easily but question here is that how can we access vlaues of object when it is in an array

let coding=[
    {
        language:"javascript",
        fileName:"js"
    },
    {
        language:"java",
        fileName:"java"
    },
    {
        language:"python",
        fileName:"py"
    },
]

coding.forEach((items)=>{
  console.log(items.fileName);
})