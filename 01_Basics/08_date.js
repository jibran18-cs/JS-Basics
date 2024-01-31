
const date= new Date()
//These are diiferent mehtods to represent date
// console.log(date.toString())
// console.log(date.toDateString())
// console.log(date.toLocaleDateString())
// console.log(date.getUTCFullYear())
// console.log(date.getUTCDate())
// console.log(date.getUTCDay())
// console.log(date.getFullYear())
// console.log(date.getMonth())
// console.log(date.getTime())
// console.log(typeof date);

// Dates declaration

// const anotherDate= new Date(2023,0,10)
// const anotherDate= new Date(2023, 0, 10, 5, 3)
// const anotherDate= new Date('2023-01-10')
// const anotherDate= new Date('02-14-2023')
// console.log(anotherDate.toLocaleString())

//Time stamps

let myTimeStamp = Date.now()
const myCreatedDate= new Date()
// console.log(myTimeStamp);
console.log(myCreatedDate.toLocaleTimeString());
console.log(Math.floor(Date.now()/1000));

// let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());

// `${newDate.getDay()} and the time `


