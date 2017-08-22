const addNumbers = require('./addition.js');

const test=(number1,number2,total)=>{
    if(addNumbers(number1,number2)==total){
          console.log("Your program is working properly!")} 
    else {
          console.log("Your program is not adding numbers properly");
        }
}
test(3,5,8)
test(1,1,3);
