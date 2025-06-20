//conditional statement.
x = 10;
if(x==10){
    console.log('the given value is 10');
    
}
console.log("-------------------------------");

//write a program to check whether it is positive or negative
x=-1;
if(x>0){
    console.log(`${x} is positive`);
    
}else if(x == 0){
    console.log(`${x} is neither negative nor positive`);
    
}
else{
    console.log(`${x} is negative`);
}
//corresponding terinary operator
result = (x>0)?"positive":((x==0)?"neither positive nor negative":"negative")
console.log(result);

console.log("-------------------------------");
//write a program to check whether a number is odd or even
y=61
if(y%2==0){
    console.log(`${y} is even`);
    
}else{
    console.log(`${y} is odd`);
}
//corresponding terinary operator
result = (y%2==0)?`${y} is even`:`${y} is odd`
console.log(result);

console.log("-------------------------------");
//write a program to check largest among two given numbers.
a=30;
b=20;
if(a>b){
    console.log(`${a} is greater`);
    
}else if(b>a){
    console.log(`${b} is greater`);
}else{
    console.log("both are qual");
    
}
//corresponding terinary operator
result= (a>b)?`${a} is greater`:((b>a)?`${b} is greater`:"both are qual");
console.log(result);

console.log("-------------------------------");
num1 = 50;
num2 = 90;
num3= 20;
if(num1>num2 && num1>num3){
    if(num2>num3){
        console.log(`${num2} is second greatest`);
        console.log(`${num1} > ${num2} > ${num3}`);
    }else{
        console.log(`${num3} is greatest`);
        console.log(`${num1} > ${num3} > ${num2}`);
    }
}
else if(num2>num1 && num2>num3){
    if(num1>num3){
        console.log(`${num1} is second greatest`);
        console.log(`${num2} > ${num1} > ${num3}`);
    }
    else{
        console.log(`${num3} is greatest`);
        console.log(`${num2} > ${num3} > ${num1}`);
    }
}
else if(num3>num1 && num3>num2){
    if(num1>num2){
        console.log(`${num1} is second greatest`);
        console.log(`${num3} > ${num1} > ${num2}`);
    }
    else{
        console.log(`${num2} is second greatest`);
        console.log(`${num3} > ${num2} > ${num1}`);
    }
}else{
    console.log("invalid input");
    
}
console.log("-------------------------------");
//w.a.p to print 'fizz' if the number is divisible by 3,'buzz' if a number is diviisble by 5 and 'fizzbuzzz' number is divisible by 15
numb=9;
if(numb%15 == 0 ){
    console.log('fizzbuzz');
    
}else if(numb%5 == 0){
    console.log('buzz');
    
}else if(numb%3 == 0){
    console.log('fizz');
    
}else{
    console.log("The given digit is not ivisible by any of three digits");
    
}
//corresponding terinary operator
result = (numb%15 == 0 )?'fizzbuzz':((numb%5 == 0)?'buzz':((numb%3 == 0)?'fizz':"The given digit is not ivisible by any of three digits"));
console.log(result);
