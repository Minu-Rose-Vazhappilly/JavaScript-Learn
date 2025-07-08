a=[10,11,12,13,14,15]
a.forEach(item => {
    console.log(item);
    
});
console.log('---------------------');

a.forEach(item => {
    console.log(item**2);
    
});
x = a.map(item =>item**2);
console.log(x);
//w.a.p to display all even numbers from the given array
even = a.filter((item)=>item%2==0)
console.log(even);

even = a.find((item)=>item%2==0)
console.log(even);
a=[10,11,12,13,14,15]
high = a.reduce((n1,n2)=>n1>n2?n1:n2)
console.log(high);
small = a.reduce((n1,n2)=>n1<n2?n1:n2)
console.log(small);
sum = a.reduce((n1,n2)=>n1+n2)
console.log(sum);
avg = a.reduce((n1,n2)=>n1+n2)/a.length
console.log(avg);
//w.a.p to print all even numbers from the given array
even = a.filter((item)=>item%2==0)
console.log(even);
//w.a.p to print first even numbers from the given array
even = a.find((item)=>item%2==0)
console.log(even);
//w.a.p to check whether even numbers fis presnt or not
even = a.some((item)=>item%2==0)
console.log(even?'Present':'Not Present');

even = a.includes(22)
console.log(even?'Present':'Not Present');

