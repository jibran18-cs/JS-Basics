class user{
    constructor(username, email, password){
    this.username=username
    this.email=email
    this.password=password
    }
    
    //Sometimes we dont want to give access of every method so we use static before that method to do so
   static logMe(){
        console.log(`USER: ${this.username}`);
    }
    mailMe(){
        console.log(`Email: ${this.email}`);
    }
}


const musta= new user('Musta')
// musta.logMe()

class Maryam extends user{
    constructor( username, email){
        super(username)
        this.email=email
    }
    
}
const Bholi= new Maryam('Bholi', 'Bholi@gmail.com')
// Bholi.logMe() even we cant access it here
Bholi.mailMe()