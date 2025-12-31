//global, functional, block
var a = 12;  //line 2 and 3 global scope me hai
var a = 123;
function num (){
    if (true){
        var b = 12; //yaha jo b hai wo var hai aur var functional scoped hai to ye pure function me accessable hoga (ie, if ke bahar bhi)
    }
    console.log(b);
}
num()


function num1(){
    if(true){
        let b = 12;
        console.log(b); // ye let hai to srif ye if block{} (ie, arent block) ke andar tak he scope hai
        
    }
    // console.log(b);  yaha pe error ayega that b is not defined kyuki let block scoped hai (ie, {} ke andar tak he kaam karta hai) jo abhi if block hai to uske bahr access nhi kar sakte .
    
}

num1()

