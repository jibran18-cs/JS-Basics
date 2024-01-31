
// console.log("2"==2)
// console.log("2"===2)

console.log(null==0);
console.log(null>0);

console.log(null>=0);
console.log(null<=0);
//The reason is that equality check == and comparison >< >= <= works differently
//comparison coverts null to a number treating it as 0 , that's why 1 and 2 are false but 3 amd 4 are true
//++++++++++++++Note++++++++++++++++++++
//In JS we can compare two diff datatypes which sometimes can cause confusion that's why we use typescrtipt which does not allow comparison of same datatype

console.log(undefined==0);
console.log(undefined>0);
console.log(undefined>=0);

// == only checks number but === not only checks number but also it checks the dataype as well (strict check)