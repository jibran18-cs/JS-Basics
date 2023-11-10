/*In JavaScript, a filter is a built-in array method that allows you to create a new array by selecting elements from an existing array that meet a specified condition. It's a powerful tool for quickly extracting or excluding elements based on a given criteria, such as values that match a specific condition or meet certain criteria, like filtering out odd numbers or finding all items with a particular attribute. */
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums=myNums.forEach((nums)=> nums)
// console.log(newNums) It does not work

// const newNums= myNums.filter((nums)=> nums>=5)
// console.log(newNums)


// If we do this using forEach then we have to use the code given below
// const newNums=[]
// myNums.forEach((nums)=>{
//     if (nums>=5) {
//         newNums.push(nums)
//     }
// })
// console.log(newNums);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

// Filter out the books with genre history

let user= books.filter((bk)=> bk.genre==="History") // Here we are not using return . Because it returns value implicitly 

//Filter out the books with genre science and publish after 2000
user= books.filter((bk)=> {
   return (bk.genre==="Science" && bk.publish >2000) // But when we use {} then we have to use return 
})
// console.log(user);

/* ++++++++++++++++++ Diff b/w filter and map
Filter: It creates a new array containing only the elements that satisfy a specified condition. Use filter when you want to extract or exclude specific elements from an array based on a certain criteria.

Map: It creates a new array by applying a function to each element in the original array. Use map when you need to transform each element in an array and produce a new array of the same length.

In short, use filter for filtering elements, and use map for transforming elements in an array. */


//++++++++++++++++++++++ Map ++++++++++++++++++++++++++++++++++

const number= [1,2,3,4,5,6,7,8,9,10]

const newNum=number.map((num)=> num * 10)
// console.log(newNum);

// Chaining

const newNum1=number
                    .map((num)=> num * 10)
                    .map((num)=> num +1)
                    .filter((num)=> num>50) // 1st map will pass its values to next map

console.log(newNum1)