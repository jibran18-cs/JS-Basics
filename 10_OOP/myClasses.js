// After ES6

// class user{
//     constructor(username, email, password){
//         this.username=username
//         this.email=email
//         this.password=password
//     }
//     getPassword(){
//         console.log(`password is ${this.password}`);
//     }
//     userCapital(){
//         console.log(`${this.username.toUpperCase()}`);
//     }
// }
// const jibran= new user('Jibran', 'jib@fb.com', 1234)

// jibran.getPassword()
// jibran.userCapital()

//Behind the scene 'Suppose if we don't have classes'

function user(username, email, password){
    this.username=username
    this.email=email
    this.password=password
}

user.prototype.getPassword=function() {
    console.log(`password is ${this.password}`);
}
user.prototype.userCapital=function() {
    console.log(`${this.username.toUpperCase()}`);
}

const jibran= new user('Jibran', 'jib@fb.com', 1234)

jibran.getPassword()
jibran.userCapital()