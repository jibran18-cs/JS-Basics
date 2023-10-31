//Sometimes we want to execute a function immedaitley and don't want global scope pollution in it .For that purpose
//We use Immediatley invoked function

(function db(){ //This is named ifee
    console.log("DB Connected");
})();// **Imporant Note**: we have to put semicolon after ifee to tell function where to stop . Otherwise we can't use other ifee

((name) => { 
    //This is unnamed ifee
    console.log("DB 2 Connected");
    console.log(name);
})("Jibran")// We can also give argument to ifee

