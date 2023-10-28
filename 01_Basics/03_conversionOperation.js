let str= "33"
// console.log(typeof str);

let numStr= Number(str)
// console.log(typeof numStr);

let a = "44abc"
console.log(typeof a);
let aNum= Number(a)

// console.log(typeof aNum); It's type will be number
// console.log(aNum); But It's value will be NaN

let bool= false
let numBool= Number(bool)
// console.log(numBool) if bool =true it's value is 1 and if bool is false it's value is 0

let z= "j"
// let zBool= Boolean(z)
// console.log(zBool);  if z=0 it will be false and if z=1 it will be true and if z="" it will be false and if z="dsf" it will be true


// *********************** Operations ***********************
console.log(typeof("2"+3+4)) //It will convert the type of whole value to the first value in this case it will be converted into string type
console.log(typeof(4+2+"2"));//In this case it will be converted into string type

//Prefix  => It will update the value first and then give the result
let x= 4
let y= ++x
console.log(x);
console.log(y);

//Postfix  => It will give the result and then update the value first
let a1= 4
let b1= a1++
console.log(a1);
console.log(b1);