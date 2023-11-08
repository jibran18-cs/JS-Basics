
// for (let i = 0; i < 10; i++) {
//     if (i==5) {
        
//         console.log("Hello world5");
//     }
//     console.log("Hello world "+i);
// }
    

//Table of 1 to 10

// for (let  i= 1;  i<= 10; i++) {
//     for (let  j= 1;  j< 10; j++) {
//     console.log(`${i}*${j}=${i*j} `);
    
//     }
    
// }

//Find the factorail of a number
// var n=1
// var num=7
// function func(){
// for (var i = 1; i <= num; i++) {
//     n= n*i
// }
//     console.log(n);
    
// }
// func()

//Keywords : +++++++++++++++Break and Continue+++++++++++++++++

//Break will break the control flow . It will move execution out
/*
1-The break statement is used to exit a loop prematurely, typically within a for, while, or do...while loop.
2-When break is encountered in a loop, the loop is immediately terminated, and the program continues with the code after the loop.
3-It is often used to exit a loop based on a certain condition without completing all iterations of the loop. */

// for (let index = 1; index <= 15; index++) {
//     if (index==5) {
//         console.log("5 is detected");
//         break;// Break will stop futher execution/control flow
//     }
        
//     console.log(index);
    
// }


//Continue will only skip one value in which we use continue 
/*
1-The continue statement is used to skip the current iteration of a loop and move to the next one.
2-When continue is encountered, the loop's current iteration is immediately stopped, and the loop proceeds to the next iteration.
3-It is often used to skip certain iterations of a loop based on a condition without exiting the loop entirely. 
*/

for (let index = 1; index <= 15; index++) {
    if (index==5) {
        console.log("5 is detected");
        continue;// Break will stop futher execution/control flow
    }
        
    console.log(index);
    
}
