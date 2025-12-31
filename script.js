// //global, functional, block
// var a = 12;  //line 2 and 3 global scope me hai
// var a = 123;
// function num (){
//     if (true){
//         var b = 12; //yaha jo b hai wo var hai aur var functional scoped hai to ye pure function me accessable hoga (ie, if ke bahar bhi)
//     }
//     console.log(b);
// }
// num()


// function num1(){
//     if(true){
//         let b = 12;
//         console.log(b); // ye let hai to srif ye if block{} (ie, arent block) ke andar tak he scope hai
        
//     }
//     // console.log(b);  yaha pe error ayega that b is not defined kyuki let block scoped hai (ie, {} ke andar tak he kaam karta hai) jo abhi if block hai to uske bahr access nhi kar sakte .
    
// }

// num1()

// //day2 Reassigment and redeclaration
// var a = 12; //this is declaration and initilization - first value of any variable
// console.log(a);

// a = 13; // this is updation or reassignment
// console.log(a);

// var a = 10; // this is redeclaration of variable a which is only posiible when using var not let
// console.log(a);

//Temporal dead zone