class user{
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`USER: ${this.username}`)
    }
}

class Teacher extends user{
    constructor(username, email, password){
        super(username)// now we don't have to use call as we did in functions. We use super in classes
        this.email=email
        this.password=password
    }
    course(){
        console.log(`Course is added by ${this.username}`);
    }
}

const umar= new Teacher('Umar', 'omar@fb.com', 24532)
umar.course()
umar.course()

//Now you know techer is inheriting username and a method logMe from user class
console.log(umar instanceof user);
console.log(umar instanceof Teacher);