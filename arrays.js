weekday = ['Mon','Tue','wed']
console.log(weekday);

console.log(typeof(weekday));
//(key:value)
//(index:value)
console.log(weekday[0]);

for(i=0;i<weekday.length;i++){
    console.log(weekday[i]);
    
}
weekday.push('Thurs')
weekday.push('Fri')
console.log(weekday);
weekday.unshift('sun')
console.log(weekday);
console.log('-------------------');
weekday.pop()
console.log(weekday);



for(let i in weekday){
    console.log(i);
    
}
for(let item of weekday){
    console.log(item);
    
}
expense = [15000,25000,50000,65000]
// w.a.p to find the lowest expense
min = expense[0]
for(i=0;i<expense.length;i++){
    if(min>expense[i]){
        min = expense[i]
    }
}
console.log(min);

// w.a.p to find the highest expense
max = expense[0]
for(i=0;i<expense.length;i++){
    if(max<expense[i]){
        max = expense[i]
    }
}
console.log(max);
// w.a.p to find the total expense
sum = 0;
for(i=0;i<expense.length;i++){
    sum+=expense[i]
}
console.log(sum);
//w.a.p t o print whether 2 is present or not
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
            isduplicate = false;
            for(k=0;k<arr1.length;k++){
                if(arr1[k]==arr[i]){
                    isduplicate = true;
                }
            }
            if(isduplicate == false){
                arr1.push(arr[i])
            }
        }
    }
}
console.log(arr1.length==0?"No duplicate elements":arr1);
//complete above question ..only needs duplicate element.
//w.a.p to print whose pair sum = 6
a=[2,3,4,5]
isPresent = false
for(i=0;i<a.length;i++){
    for(j = i+1;j<a.length;j++){
        if(a[i]+a[j] == 10){
            isPresent = true
            console.log(`(${a[i]},${a[j]})`);
            
        }
    }
}
isPresent == false && console.log('no pair sum');
console.log('-----------another method----------');

a=[2,3,4,5]
low=0
up = a.length-1
pairsum = 11
isPresent=false
while(low<up){
    if(a[low]+a[up]==pairsum){
        isPresent = true
         console.log(`(${a[low]},${a[up]})`);
         low++;
    }else if(a[low]+a[up]>pairsum){
        up--
    }else{
        low++
    }
}
isPresent == false && console.log('no pair sum');
p=[10,11,12,20,30]
q=[11,20,25,30,33,30]
pq=[]
for(i=0;i<p.length;i++){
    for(j=0;j<q.length;j++){
        if(p[i]==q[j]){
            isDuplicate = false;
            for(k=0;k<pq.length;k++){
                if(pq[k]==p[i]){
                    isDuplicate = true;
                }
                
            }
            if(isDuplicate == false){
                pq.push(p[i])
            }
        }
    }
}
console.log(pq);



