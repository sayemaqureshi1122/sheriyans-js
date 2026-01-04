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

 

// //PRIMITIVE --> number, string, boolean, null, undefined, symbol, BigInt

// //Symbol -- >
// let details = {
//     id: 1,
//     name:"sam", 
//     lastName : "qureshi"
// };
// console.log(details);
// // i without looking into the object always have a habit to add an id in the object and i did so

// let id1 = Symbol("id");
// details[id1] = 0o1;
// console.log(details); // saves from overwriting the og id here

// // Bigint -->
//  let h = Number.MAX_SAFE_INTEGER;
//  console.log(h);
//  h = h+2 //9007199254740992 which is wrong to to get ans if the number stored is above the range of number datatype
// let u = 9007199254740991n;
// u = u + 2n;
// console.log(u); //now gives the correct ans

// //REFERENCE --> array [], object {}, function ()

// typeof quirks -- > typeof NAN --> number , typeof null --> object, 1 + "1"-->'11'. NAN === NAN -->false

//type coercion --> jaha pe automatically kisika type of change ho jata hai

//truthy and falsy values  --> falsy --> "", NaN, null, undefined, 0, document.all

//practise questions
//Q1]
// function getGrade(score){
//     if(score <=100 && score >=90) return "A+";
//     else if(score <=89 && score >=80 ) return "A";
//     else if(score <= 79 && score >=70) return "B";
//     else if(score <=69 && score >= 60) return "C";
//     else if(score <=59 && score >= 33) return "D";
//     else if (score <=32 && score >=0) return "Fail";
//     else return "Invalid marks";
// }

// console.log(getGrade(0));


//Q2] rock-paper-scissor logic

// function rps (user, computer){
   
//     if(user == computer) return "draw";
//     if(user =="rock" && computer == "scissor") return "user wins";
//     if(user == "scissor" && computer == "paper") return "user wins";
//     if(user == "paper" && computer == "rocks") return "user wins";

//     return "computer wins";
// }

// console.log(rps("rock", "rock"));

//Day 4 -->  LOOPS(for, while, do-while)

// //Q3] print no from 1-10 using for loop
// for(let i = 1; i<=10; i++){
//     console.log(i);  
// }

 // Q4] print no from 10-1 using while loop
//  let  i = 10;
//  while(i>=1){
//     console.log(i);
//     i--;
//  }

// //Q5] print even numbers from 1-20 using for loop
// for(let i = 1; i <= 20;i++){
//     if(i % 2 == 0){
//         console.log(i);
        
//     }
// }


// //Q6] find odd numbers from 1-15 using while loop
// let i = 1;
// while(i <= 15){
//     if(i % 2 != 0){
//         console.log(i);
//     }
//     i++;
// }

// //Q7] print multiplication table 
// for(let i = 1; i <=10; i++){
//     console.log("5 x" + i + "=" + 5*i);
    
// }

//Q8] find sum of numbers from i to 100 using loop
// let sum = 0;
// for(let i = 0; i<=100; i++){
//     sum = sum + i;    
// }
// console.log(sum);


// //Q9]  print all the numbers between 1-50 that are divisible by 3
// for(let i = 1; i<=100; i++){
//     if(i % 3 == 0){
//         console.log(i);
        
//     }
// }

// //Q10] ask input from the user and determine if the number is even and odd
// let num1 = prompt("enter a number:")
// for( let i = 1; i <= num1; i++){
//     if(i % 2 == 0){
//         console.log(`${i} is a even number.`);
//     }
//     else{
//         console.log(`${i} is  a odd number.`);
//     }
// }

// //Q11] count how many numbers are divisible by both 3 and 5
// let count = 0;
// for(let i = 1; i <=100; i++){
//     if(i % 3 == 0 && i % 5 == 0){
//         count += 1;
//     } 
// }
// console.log(count);

// // Q13] stop at first multiple of 7
// let num = 1;
// while(num >=0){
//     console.log(num);
//     if(num % 7 == 0){
//         break;
//     }
    
//     num++;   
// }

// //Q14] skip multiplies of 3
// for(let i = 1; i <= 100; i++){
//     if(i % 3 == 0){
//         continue;
//     }
//     console.log(i); 
// }

// //Q15] print first 5 odd numbers only
// count = 0;
// for(let i = 1; i <= 50; i++){
//     if(i % 2 !==0){
//         if(count >= 5){
//             break;
//         }
//         console.log(i);
//         count +=1
        
//     }
// }

// //Q16] print form 1 to 5
// for(let i = 1; i<=5; i++){
//     console.log(i);
    
// }

// //Q17] print even numbers from 1 to 10
// for(let i = 1; i<=10; i++){
//     if(i % 2 == 0){
//         console.log(i);
        
//     }
// }

// //Q18] print number from 10-1
// for(let i = 10; i >=1 ; i--){
//     console.log(i);
    
// }

// //Q19] print the sum of numbers from 1-10
// let sum = 0;
// for(let i = 0; i<=10; i++){
//     sum += i;   
// }
// console.log(sum);

// //Q20] print table of 5
// for(let i = 1; i<=10; i++){
//     console.log(`${5} * ${i} = ${5*i}`);
    
// }

// //Q21] count numbers from 1-10 divisible by 3
// let count = 0;
// for(let i = 1; i <= 10; i++){
//     if(i % 3 == 0){
//         count += 1;
//     }
// }
// console.log(count);

// //Q22] print odd numbers from 1-10
// for(let i = 1; i<=10; i++){
//     if(i %2 !==0){
//         console.log(i);
        
//     }
// }

// //23] print square from 1-5
// for(let i = 1; i<=5; i++){
//     console.log(i*i);
    
// }

// //Q24] print hello 3 times
// let count = 1;
// while(count<=3){
//     console.log("hello");
//     count++;   
// }

// //25]take number from a user and print its table
// num1 = prompt("enter a number")
// for(let i =1; i <=10; i++){
//     console.log(`${num1}*${i}=${num1*i}`);
    
// }


//25] count number of digits
// let num1 = 12345;
// let count = 0;
// while(num1>0){
//     num1 = Math.floor(num1/10);
//     count++;
// }
// console.log(count);

// // Q26] reverse a digit
// let digit = 12345;
// let rev = 0;
// while(digit > 0){
//     let lastDigit = digit % 10;
//     rev = rev * 10 + lastDigit;
//     digit = Math.floor(digit/10);
// }
// console.log(rev);
// //Q27 find the sum of digits
// let num = 12345;
// let sum = 0;
// while(num>0){
//     let lastDigit = num % 10;
//     sum += lastDigit;
//     num = Math.floor(num/10);
// }
// console.log(sum);

// //Q28] count the no of digits.
// let num = prompt("enter a number:");
// let count = 0;
// while(num>0){
//     num = Math.floor(num/10);
//     count++;
// }
// console.log(count);

// //Q29] check if palidrome number

// let num = Number(prompt("enter a number"));
// let og = num;
// let rev = 0;
// while(num>0){
//     let lastDigit = num % 10;
//     rev = rev * 10 + lastDigit;
//     num = Math.floor(num/10);
// }
// if(rev === og){
//     console.log(`${og} is a palindrome number`);
// }

//Q30 check if its a armstrong number
let num = Number(prompt("enter a number:"));
let og = num;
let temp = num;
let digits = 0;
let count = 0;
//for digits
while(num>0){
    num = Math.floor(num/10);
    digits++;
}
console.log(digits);

while(temp>0){
    lastDigit = temp % 10;
    count = count + ((lastDigit)**digits);
    temp = Math.floor(num/10);
    
}
if(count === og){
    console.log(`${og} is a armstrong number`);
}
else{
    console.log("Not a armstrong number");
}