a = [[5,6],[11,9],[3,10]]
console.log(a);
console.log('------------------------');
//w.a.p to print all numbers from the given array
for(let item of a){
    console.log(item);
    
    for(let num of item){
        console.log(num);
        
    }
}
//print sum of all numbers from the given array
sum = 0
for(let item of a){
    console.log(item);
    
    for(let num of item){
        console.log(num);
        sum+=num
        
    }
}
console.log(sum);

arr = [[5,6],[11,9],[3,10]]
console.log(arr.flat());
arr = [[[5,6],[11,9]],[[3,4],[1,9]],[[78,2],[13,19]],[[15,16],[18,91]]]
console.log(arr.flat());
console.log(arr.flat(Infinity));
//nested array

//[id, name, designation, location, salary, experience]

employee =[ 
    [1000,'Neel','developer','kochi',25000,3],
    [1001,'Max','tester','TVM',20000,2],
    [1002,'MAxwell','QA','kochi',35000,4],
    [1003,'Vyom','QA','kochi',45000,5],
    [1004,'Laisha','tester','TVM',55000,7],
    [1005,'Aahan','developer','TVM',15000,1],
    [1006,'Aahil','QA','kochi',20000,2],
    [1007,'Shayan','developer','kochi',30000,3],
    [1008,'Nihaan','developer','TVM',25000,3]
]
console.log('-----------------------------');

// print all employee name 
for(let item of employee){
    console.log(item[1]);
    
}
console.log('-----------------------------');
//print total numbers of employee
// count =0
// for(let item of employee){
//     count++;
    
// }
// console.log(count);
console.log('------------count-----------------');
let count = employee.reduce((acc) => acc + 1, 0);
console.log("Total employees:", count); 
console.log('-----------------------------');
//print developer employee details
for(let item of employee){
    if(item[2] == 'developer'){
        console.log(item);
        
    }
    
}
 
console.log('-----------------------------');
//print employee whose salary > 30000
for(let item of employee){
    if(item[4] > 30000){
        console.log(item[1]);
        
    }
    
}
console.log('-----------------------------');
// print details of employee Laisha
for(let item of employee){
    if(item[1]=='Laisha'){
        console.log(item);
        
    }
    
}
console.log('-----------------------------');
//sort employee based on their salary in descending orde

employee.sort((a, b) => b[4] - a[4]); 

console.log(employee);
console.log('-----------------------------');
//sort employee based on their experience in ascending order
employee.sort((a, b) => a[4] - b[4]); 

console.log(employee);
console.log('-----------------------------');
// print the employ name whose have the higest salary
highsal = employee.sort((a, b) => b[4] - a[4])[0][1]; 
console.log(highsal);
console.log('---------using array methods------------');
employee =[ 
    [1000,'Neel','developer','kochi',25000,3],
    [1001,'Max','tester','TVM',20000,2],
    [1002,'MAxwell','QA','kochi',35000,4],
    [1003,'Vyom','QA','kochi',45000,5],
    [1004,'Laisha','tester','TVM',55000,7],
    [1005,'Aahan','developer','TVM',15000,1],
    [1006,'Aahil','QA','kochi',20000,2],
    [1007,'Shayan','developer','kochi',30000,3],
    [1008,'Nihaan','developer','TVM',25000,3]
]
// print all employee name 
employee.forEach(element => {
    console.log(element[1]);
    
});
//print developer employee details
developdet = employee.filter((item)=>item[2]=='developer').forEach((item)=>console.log(item));

//print employee whose salary > 30000.
empsal = employee.filter((item)=>item[4]>30000).forEach((item)=>console.log(item[1]));
// print details of employee Laisha
Laishadet = employee.filter((item)=>item[1]=='Laisha').forEach((item)=>console.log(item));
// print the employ name whose have the higest salary
highsal=employee.reduce((acc,item)=>acc[4]>item[4]?acc:item)
console.log(highsal[1]);
//sort employee based on their salary in descending orde

employee.sort((a, b) => b[4] - a[4]); 

console.log(employee);
console.log('-----------------------------');
//sort employee based on their experience in ascending order
employee.sort((a, b) => a[4] - b[4]); 

console.log(employee);
console.log('-----------------------------');