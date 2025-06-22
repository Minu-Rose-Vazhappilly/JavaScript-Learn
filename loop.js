//write a program to check second largest among three given numbers and arrange them in descending order.
 c = 9;
 d = 5;
 e = 10;

let numbers = [c,d,e];

for(let i = 0;i<3;i++){
    for(let j = 0;j<=3-i-1;j++){
        if(numbers[j]<numbers[j+1]){
            temp = numbers[j];
            numbers[j] = numbers[j+1];
            numbers[j+1] = temp;
        }
    }
}
console.log(numbers);
console.log(`second largest one is ${numbers[1]}`);
console.log('-------------------------------------------');

//write a program to print JavaScript 3 times 
i = 1;
while(i<=3){
    console.log("JavaScript");
    i++;
}
console.log('-------------------------------------------');
//write a program to print numbers from 1 to 5
i=1;
while(i<=5){
    console.log(i);
    i++;
    
}
console.log('-------------------------------------------');
//write a program to print numbers from 10 to 1
j=10;
while(j>0){
    console.log(j);
    j--; 
}
console.log('-----------------even numbers from 1--------------------------');
//write a program to print even numbers between 1 to 50
console.log('hi');

z=2;
while(z <= 50){
    console.log(z);
    z+=2;   
}
console.log('--------------even numbers from zero-----------------------------');
//another way
z=0
while(z <= 50){
    if(z%2 == 0){
    console.log(z);
    z+=2; 
    }  
}
console.log('------------------sum of all numbers-----------------------------');

//w.a.p to print sum of all numbers between 1 to 10
i=0;
sum = 0;
while(i<=10){
    sum = sum + i;
    i++;
}
console.log(sum);
console.log('----------------------------------------------------');

//w.a.p
// 2 3 4
// 24 369 4936

i = 2;
number = 12;
while(i<=4){
    result = i * number;
    console.log(result);
    i++;
    number = (number * 10)+ i;
}
console.log('----------------------------------------------------');
//another method
i = 1;
input = 3;
str ='';
while(i<=input){
    str = str + i
    i++;
}
console.log(input*str);

console.log('--------------another pattern same question as above-------------------');

//2 +22 3+33+333 4+44+444+4444
i = 1;
input = 2;
str = '';
sum = 0;
while(i<=input){
    str = str+input;
    sum = sum + Number(str);
    i++;
}
console.log(sum);
console.log('-------------------------------');

//write a program to find the reverse of a given number.
//num%10 - will give last digit as the remainder
//num*10=add zero to the once place.
input = 123;
str='';
while(input!=0){
    remainder = input%10;
    str=str+remainder;
    input = Math.floor(input/10);
}
console.log(str);
console.log('-----------another method------------');
input = 123;
rev=0;
while(input!=0){
    remainder = input%10;
    rev=rev*10+remainder;
    input = Math.floor(input/10);
}
console.log(str);
console.log('----------------------------------------');

//w.a.p to print a given number is palindrome or not
//reverse and original is same = plaindrome.
original = 1001
input = original;
rev=0;
while(input!=0){
    remainder = input%10;
    rev=rev*10+remainder;
    input = Math.floor(input/10);
}
if(original == rev){
    console.log("palindrome");
}else{
    console.log("not palindrome");
    
}

//w.a.p to find the factorial of a given number.
input = 5;
i=1;
product = 1;
if(input == 0){
    product= 1;
}else{
while(i<=input){
    product = product * i;
    i++;
}
}
console.log(product);
//w.a.p to find a given number is armstrong or not.
//armstrong = 153 = 1*3 + 5*3 + 3*3 = 153....

  