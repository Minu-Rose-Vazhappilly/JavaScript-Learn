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