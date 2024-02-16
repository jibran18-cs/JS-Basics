function setUser(username){
   this.username=username
}

// function createUser(username, email, password){
//     setUser(username)/* Here we cannot access username. Becuase setUser is on the top in execution context when it is called it's values also gone 
//     that's why we cannot access it . 
//     Solution is we have to hold the values of setUser even it's gone from execution context. 
//     */
// //    this.username=username
//    this.email=email
//    this.password=password
// }

//Here is what we should do to hold values of setUser even it's gone
function createUser(username, email, password){
    setUser.call(this,username) // This here is to tell setUser to user refrence of createUser
//    this.username=username
   this.email=email
   this.password=password
}
const user= new createUser('chai', 'chai@fb.com', '12354')
console.log(user)