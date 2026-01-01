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
//         console.log(b); // ye let hai to srif ye if block{} (ie, parent block) ke andar tak he scope hai
        
//     }
//     // console.log(b);  yaha pe error ayega that b is not defined kyuki let block scoped hai (ie, {} ke andar tak he kaam karta hai) jo abhi if block hai to uske bahar access nhi kar sakte .
    
// }

// num1()

// //day2 Reassignment and redeclaration
// var a = 12; //this is declaration and initialization - first value of any variable
// console.log(a);

// a = 13; // this is updation or reassignment
// console.log(a);

// var a = 10; // this is redeclaration of variable a which is only possible when using var not let
// console.log(a);

// //Temporal dead zone

// // console.log(c); // yaha ye error milta hai ReferenceError: Cannot access 'c' before initialization (in case of let & const)

// //                   // aur ye line from 36 to 38 variable c ka temporal dead zone hai kyuki yaha js compiler ko pata hai c exist karta hai but usko ye part me access nhi kar sakte
// // let c = 12;

// console.log(b); // yaha undefined dega
// var b  = 13;   


// //HOISTING impact per type
// // aur jab hum koi bhi variable ko uske initialization se phele  he access kar pate hai usko hoisting kehte hai .
// //ex: of hoisting for let  --> yaha declaration ke pehle access nhi kar sakte
// let a;
// console.log(a);
// a = 13;
// console.log(a);
// // for const --> bina initialization error dikhta hai
// const pi = 3.14; 
// //for var --> kahi se bhi access kar sakte hai (ie, before after declaration and initialization)
// console.log(d);
// var d;
// console.log(d);
// d = 14;
// console.log(d);

// // ABOUT CONST
// const info = {name :"sayema"}; //hun const ko redeclare nhi kar sakte par agar koi object hai to uske parameter update kar skate hai
// info.name = "qureshi";
// console.log(info);

// Object.freeze(info); // ye use karne ke baad aap apne object ko update bhi nhi kar skate

// info.name = "sayema";
// console.log(info);    // this doesn't work now


// //DAY 3 - datatypes in js

// //main difference  -  ki agar primitive data type ki value copy ki to next variable ko cpoied value milte hai jo first var se independently kaam karte hai (ie, ek var ki value me change dusre copied value ko effect nahi karta.). But in reference me hume bas first var (parent var) ka refernece cpoy milta hai (ie, ek me change dusre cpoied var me bhi change karta hai).

// //EX: for primitive
// let a = 12;
// let b = a;
// console.log(a); // 12
// console.log(b); // 12

// a = a + 2;
// console.log(a); //14
// console.log(b); // to notice karo ki a ki he value me change hoga b ki nhi --> 12


// //EX: for refernce
//  let info = {name: "sayema", age : 21};
//  let info1 = info;
//  console.log(info); // sayema 21
//  console.log(info1); // sayema 21

//  info1.name = "shahid"  // yaha ek me  change dono me change kar raha hai shows ki info1 me koi separate value store nhi hote wo bas info ka reference leke value store karte hai
// console.log(info);  // shahid 21
// console.log(info1); // shahid 21

 

//PRIMITIVE --> number, string, boolean, null, undefined, symbol, BigInt

//Symbol -- >
let details = {
    id: 1,
    name:"sam", 
    lastName : "qureshi"
};
console.log(details);
// i without looking into the object always have a habit to add an id in the object and i did so

let id1 = Symbol("id");
details[id1] = 0o1;
console.log(details); // saves from overwriting the og id here

// Bigint -->
 let h = Number.MAX_SAFE_INTEGER;
 console.log(h);
 h = h+2 //9007199254740992 which is wrong to to get ans if the number stored is above the range of number datatype
let u = 9007199254740991n;
u = u + 2n;
console.log(u); //now gives the correct ans

//REFERENCE --> array [], object {}, function ()
