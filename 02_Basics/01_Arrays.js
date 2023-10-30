//The Array object, as with arrays in other programming languages, enables storing a collection of multiple items under a single variable name, and has members for performing common array operations.
// 1=>JavaScript arrays are resizable and can contain a mix of different data types
// 2=>JavaScript arrays are zero-indexed
// 3=>JavaScript array-copy operations create shallow copies

const myArr= new Array (1, 2, 3, 4, 5)

// console.log(myArr);

// Methods

const myArr2= [12, 43, 44, 7, 8]
const newArr2= myArr2.join()// Join converts array values into string
// console.log(newArr2);
// myArr2.push(9)// Add element at the end of array
// myArr2.pop() // Remove element from end of the array
// myArr2.unshift(90)// Add element at the start of the array
// myArr2.shift() // Remove element from the start of array
// console.log(myArr2.includes(76)); Outcome is true if element is present otherwise it will be false
// console.log(myArr2.indexOf(12));// it tells index of element

//Difference b/w slice and splice
// The difference b/w slice and splice is that in slice original array is not changed while splice affects the values of original array
// const newArr= [2, 3, 5, 7,3]
// console.log(newArr.slice(1, 4))
// console.log("A", newArr);
// console.log(newArr.splice(1, 4))
// console.log("B", newArr);

//++++++++++++++++Array Concate and other methods++++++++++++++++++++++

const arr1= [1,2,1,2,3,4]
const arr2= [2,1,2,1,4,3]
// arr1.push(arr2)
// const arr3=arr1.concat(arr2)// It will add arr1 and arr2 and return sum of both into new array in this case it is arr3
// console.log(arr3); // It just add the whole array as a single element in arr1 .

// Another way of adding two arrays is using spread operators
const spreadArr= [...arr1, ...arr2]
// console.log(spreadArr)

//Flat
const anArray= [1, 3, 4,[1,4,6], [3,5,8,[5,3,2]],8,8]// How can we we convert them into single array ? By using flat
// const anotherArray= anArray.flat(Infinity)
// console.log(anotherArray)

// How to convert a string into array

const name= "Jibran"
console.log(Array.isArray(name));
console.log(Array.from(name));

// Now if want to convert multiple varialbes into an array
const num1= 200
const num2= 300
const str= "jb"
console.log(Array.of(num1, num2, str));


