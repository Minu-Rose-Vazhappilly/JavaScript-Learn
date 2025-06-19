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
  