a = [2,12,6,10,5,3]
low = 0;
up = a.length - 1;
si=2
a.sort((n1,n2)=>n1-n2)
while(low<=up){
    mid = Math.floor((low+up)/2)
    if(a[mid]==si){
        console.log("Found");
        break
    }else if(a[mid]<si){
        low = mid + 1;
    }else{
        up = mid - 1;
    }
}
if(low>up){
    console.log("not found");
    
}
//w.a.p to print duplicate lement of two arrays
p=[10,11,12,20,30]
q = [11,20,25,30,33]
op=[];
for(i=0;i<p.length;){
    for(j=0;j<q.length;){
        if(p[i]==q[j]){
            op.push(q[j])
            i++;
            j++;
        }
        else if(p[i]<q[j]){
            i++
        }else{
            j++;
        }
    }
}
console.log(op);
console.log('------------another method--------------');

p=[10,11,12,20,30]
q = [11,20,25,30,33]
op=[];
i=0
j=0
    while(i<p.length && j<q.length){
        if(p[i]==q[j]){
            op.push(q[j])
            i++;
            j++;
        }
        else if(p[i]<q[j]){
            i++
        }else{
            j++;
        }
    }
    
console.log(op);


//need to complete

