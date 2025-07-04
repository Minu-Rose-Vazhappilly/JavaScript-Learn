a = [10,11,12,2,3,4]
searchItem = 2;
isPresent = false;
for(let item of a){
    if(item == searchItem){
         isPresent = true;
         break;
    }
    
}
console.log(isPresent?'Present':'Not Present');
a = [4,5,6]
output = []
start = (2*a.length)+1;
for(i=0;i<=a.length - 1;i++){
    output[i] = a[i]+start;
    start =start-2;

}
console.log(output);
console.log('--------------another method-----------------');

ip=[4,5,6]
o=[]
for(let item of ip){
    o.unshift(item+5)
}
console.log(o);

console.log('--------------another method-----------------');

input=[4,5,6]
out=[]
sum=0;
for(let item of input){
    sum+=item;
}
for(let item of input){
    out.push(sum-item)
}
console.log(out);
console.log('-----------------------');
arr=[10,20,30,20,30,40,50,60,10,60]
arr1=[]
for(i=0;i<arr.length;i++){
    for(j=i+1;j<arr.length;j++){
        if(arr[i]==arr[j]){
            arr1.push(arr[i])
        }
    }
}
console.log(arr1.length==0?"No duplicate elements":arr1);
//complete above question ..only needs duplicate element.
//w.a.p to print whose pair sum = 6
//a=[2,3,4,5]



