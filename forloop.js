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
number = 4;

if (number <= 1) {
    console.log('Given number is neither prime nor composite');
} else {
    let isPrime = true;
    for (let i = 2; i * i <= number; i++) {
        if (number % i === 0) {
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
if(isprime == 1){
    console.log(i);
    
}
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