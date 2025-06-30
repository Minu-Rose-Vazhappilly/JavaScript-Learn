//w.a.p to print 'javascript' using function

function display(){
    console.log('Javascript');
    
}
display()
console.log('--------------------------------------------');


//write a program to print sum of two given numbers using function.
num1 = 20;
num2 = 30;
function sumofTwoNumber1(num1,num2){
    sum = num1 + num2
    console.log(sum);
    
}
sumofTwoNumber1(num1,num2);
sumofTwoNumber1(15,20);
sumofTwoNumber1(15,25);
console.log('---------------------------------------');

number1 = 2
number2 = 3
function sumofTwoNumber(num1,num2){
    console.log('sum of two numbers are');
    
    return sum = num1 + num2
    
    
}
console.log(sumofTwoNumber(number1,number2));

//w.a.p to display a given number is positive or negative using function
function posNeg(num1){
if(num1 == 0){
    console.log("The given number is neither positive nor negative");
    
}else if(num1>0){
    console.log("positive");
    
}else{
    console.log("negative");
    
}
}
posNeg(-1);

//w.a.p to display odd or even using function
function evenOdd(num1){
 result = (num1%2 == 0)?"even":"odd" 
 console.log(result);
 
}
evenOdd(3)
//w.a.p to display greatest among two given numbers
function greatest(num1,num2){
 
 if(num1>num2){
    console.log(`${num1} is greatest`);
    
 }else if(num2>num1){
    console.log(`${num2} is greatest`);
    
 }else{
    console.log("given numbers are equal");
    
 }
 
}
greatest(10,10)

//w.a.p to display cube of given number using function.
function cubeOfNumbers(num1){
    result = num1**3
    console.log(result);
    
}
cubeOfNumbers(2)