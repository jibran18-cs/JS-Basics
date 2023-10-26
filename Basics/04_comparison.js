
// console.log("2"==2)
// console.log("2"===2)

console.log(null==0);
console.log(null>0);
console.log(null>=0);
console.log(null<=0);
//The reason is tha equality check == and comparison >< >= = works differently
//comparison coverts null to a number treating it as 0 , that's why 1 and 2 are false and 3 is true

console.log(undefined==0);
console.log(undefined>0);
console.log(undefined>=0);