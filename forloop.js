console.log('----------------------------------');

for(i=1;i<=5;i++){
    console.log(i);
    
}
console.log('----------------------------------');
//w.a.p to print factorial of a given number using for loop
number = 5;
product = 1;
for(i=1;i<=number;i++){
    product = product * i;
}
console.log(product);

console.log('----------------------------------');
//w.a.p to print given number is prime or not 
//number which has only number and 1 as factors 
number = 5;

if (number <= 1) {
    console.log('Given number is neither prime nor composite');
} else {
    isPrime = true;
    for (let i = 2; i * i <= number; i++) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log('The given number is prime');
    } else {
        console.log('The given number is composite');
    }
}
//w.a.p to print all prime numbers from 2 to 50;
number = 50;
for(i=2;i<=number;i++){
    isprime=1;
for(j=2;j*j<=i;j++){
    if((i%j==0)){
        isprime = 0;
        break;
    }
} 
// if(isprime == 1){
//     console.log(i);
    
// }
isprime && console.log(i);
}
console.log('---------------------------------');

//w.a.p to print all armstrong numbers from 8 - 500

for(i=8;i<=500;i++){
    armstrong = 0;
    number = i;
    count = 0
    for(j=i;j!=0;j=Math.floor(j/10)){
        lastdig = j%10;
        count++
    }
    for(k=i;k!=0;k=Math.floor(k/10)){
        lastdig = k%10;
        armstrong = armstrong + lastdig**count;
    }
    if(number == armstrong){
        console.log(number);
        
    }
}
console.log('--------another method to find count-------------');
number = 443521
count = (number+"").length;
console.log(count);

//w.a.p to find hcf of two given numbers
//here hcf could not be greater than small number
console.log('------------my method not promoted one-----------');

number1 = 6;
number2 = 12;
max = 0;
if(number1>number2){
    min=number2;
}else{
    min=number1;
}
for(i=1;i<=min;i++){
    count = 0;
    if(number2 % i == 0){
        count++;
    }
    if(number1 % i == 0){
        count++;   
    }
    if(count>1){
        if(i>max){
            max = i;
        }  
    }
}
console.log(max);
console.log('--------------another method----------');
number1 = 24;
number2 = 12
for(i=1;i<number1 && i<number2;i++){
    if(number%i==0 && number2%i == 0){
        hcf = i
    }
}
console.log(i);

