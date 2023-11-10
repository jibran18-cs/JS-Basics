/*=>The reduce method in JavaScript is used to iterate over an array and accumulate a single value based on the elements of the array. You use reduce when you need to perform a cumulative operation on the elements of an array, such as summing them up, finding the maximum value, or any other operation that combines array elements into a single result */

let value= [1,2,3]

let newValue= value.reduce((acc,currVal)=> acc + currVal, 0)
// console.log(newValue);


let shoppingCart= [
    {
        name: "JavaScript",
        price: 2999
    },
    {
        name: "Python",
        price: 1999
    },
    {
        name: "Java",
        price: 5999
    },
    {
        name: "Data Science",
        price: 12999
    },
]

let total= shoppingCart.reduce((acc, item)=> {
    console.log(`price: ${acc} and ${item.name}: ${item.price}`);
   return (acc+item.price)
},0)
console.log(total);