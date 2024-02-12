/*+++++Promise+++++++
A Promise is an object representing the eventual completion or failure of an asynchronous operation*/

/*  +++++++=>History<=++++++
In past when there where no promises we use libraries like BlueBird to do async programming(Now this library is installed by defualt in core JS) 
*/
/* There are two parts
1- To create promise
2- Consume promise
*/

//Creating promise
//Promise--1
const promiseOne= new Promise(function(resolve, reject){
    //Do async task
    //DB calls, cryptography task, network calls
    setTimeout(function(){
        console.log("Promise1");
        resolve()// When it will complete than it will connect with the .then.
    },1000)
})
//Resolve have the direct connection with the .then .It returns the value in .then . 
promiseOne.then(function(){
    console.log('Promise consumed');
})

//Promise--2

new Promise(function(resolve, reject){
   setTimeout(function(){
       console.log('Promise2');
       resolve()
},1000)

}).then(function(){
    console.log(('Promise2 consumed'));
})

// Now we will see how we get the data in .then which is coming from resolve
//Promise--3

const promiseThree= new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Promise3");
        resolve({
            username: 'Jibran',
            age:22
        })
    },1000)

})
promiseThree.then(function(user){
   console.log(user);
}) 

//Promise--4

const promiseFour= new Promise(function(resolve,reject){
    setTimeout(function(){
        let error= false
        if (!error) {
            console.log("Promise4");
        resolve({
            username: 'JS',
            age:25
        })
    }else{
        reject('Error: Something went wrong'); //It will give error if the function is not resolved
    }
        }
        ,1000)

})
promiseFour
.then(function(user){
   console.log(user);
   return user.username
}) 
.then(function(username){
    console.log(username); //We can use .then multiple times
})
.catch((error)=>{
    console.log(error);
})
.finally(()=> console.log('The promise is either resolved of rejected'))//It will always run wether it gives response or error

/* Difference b/w (async await) and (.then .catch) in javascript
(Feature)	                 (Async/await)	                                                  (.then/.catch)  
Syntax	                 More concise, resembles synchronous code	                       Can lead to nested callbacks ("callback hell")
Readability	             Generally easier to read and maintain	                           Can become less readable with complex use cases
Error handling	         Requires try...catch around await expressions	                   .catch placed at the end of the chain
Use cases	             Preferred for most modern asynchronous programming	                Still viable for simpler cases or integrating with legacy code
*/


//+++++++++++++=>   async await   <=+++++++++++++++


const promiseFive= new Promise(function(resolve,reject){
    setTimeout(function(){
        let error= true
        if (!error) {
            console.log("Promise5 using async/await");
        resolve({
            username: 'JS7',
            age:35
        })
    }else{
        reject('Error: Something went wrong'); //It will give error if the function is not resolved
    }
        }
        ,1000)

})

async function promiseFiveConsumed(){
    try {
        const response =await promiseFive
        console.log(response.username);
        
    } catch (error) {
        console.log( error);
    }
    
}
promiseFiveConsumed()


//Now let's do some practical work

// async function Allusers(){
//     try {
//         const response= await fetch('https://jsonplaceholder.typicode.com/users')
//         const data =await response.json()// It also takes time to convert data into JSON format that's why we have to use await here as well
//         console.log(data);
//     } catch (error) {
//         console.log('E:' ,error);
//     }
    
// }
// Allusers()

// If same thing we want to do with .then .catch
// Why response of fetch is coming before all the responses written above .This is because fetch request always went into a priority queue
fetch('https://jsonplaceholder.typicode.com/users')
.then(function(response){
   return response.json()
})
.then(function(data){
    console.log(data);
})
.catch(function(error){
    console.log('E:' ,error)
})


//Fetch(Watch video number 41 for revision of fetch(chai or javascript))