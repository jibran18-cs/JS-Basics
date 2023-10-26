const accountId= 123562;
let accountMail= "jibran@gmail.com";
 var accountNo="2983748321";
 accountCity= "Bahawalpur" // We can also use the variable even without using any keyword before it

//  accountId= 2     This is not allowed (We cannot reassign the const . Mean it's value will remain constant)

//  console.log(accountId);

 accountMail= "JJ@gmail.com";
 accountNo="7123847";
 accountCity= "Lodhran"

 //Here we can see can change the value of every variable except const
// console.table([accountId, accountMail, accountNo, accountCity])

//Important

// We have to assign value with declaration of const but in case of var and let we can declare them first and assign value later

// const testConst;
let a;
var b;

a=5
b=6
// testConst= 12342;

console.table([a, b]);


/*
Declaration is the act of introducing a variable, specifying its name and type, while initialization is the act of assigning a value to that variable, either at the point of declaration or at a later stage in the program
*/