employee = [1000,'Neel','developer','Kochi',25000,3]
console.log(employee);
for(let key in employee){
    console.log(employee[key]);
    
}

console.log(employee[1]);
console.log('------------------------------------');
//create
employees = {
    empid:1000,
    empName:'Neel',
    empDesg:'developer'
}
console.log(employees);
//read
console.log(employees['empDesg']); //if there is exactly that name in object you should use single quotes or elese just mention key(refer below for loop)
console.log(employees.empName);
//add
for(let key in employees){
    console.log(employees[key]);
    
}
employees['emploc'] = 'Kochi'
employees['empsal'] = 25000
console.log(employees);
Object.assign(employees,{empExp:3,vaccinated:true})
console.log(employees);
//update
employees['empExp'] = 5 
//employees['empExp'] += 2
console.log(employees);
//delete
delete employees.vaccinated
console.log(employees);
//w.a.p to check 'emploc' key is in the given object,if yes print the value,not print 'Not Prsent 
isPresent = false
for(let item in employees){
    if(item == 'emploc'){
        console.log(employees[item]);
        isPresent = true
    }
}
if(isPresent == false){
    console.log("Not Present");
    
}

'emploc' in employees?console.log(employees['emploc']):console.log('Not Present');


//w.a.p to check 'empgender' key is in the given object,if yes print the value else add the value.
for(let item in employees){
    if(item == 'empgender'){
        console.log(employees[gender]);
        
    }else{
        employees['empgender'] = 'Male'
    }
}
console.log(employees);
'empgender' in employees?console.log(employees['empgender']):employees['empgender']=='Male';
console.log(employees);

//student implement crud name,id,class,mark,age
//create
student = {
    rollno:35,
    name:'Minu',
    Course:'MCA',
    CGPA:7.7,
    
}
console.log(student);
// read
for(let key in student){
    console.log(student[key]);
    
}
//add
student['Age']=23
console.log(student);
Object.assign(student,{Duration:2,Vaccinated:true})
console.log(student);
//update
student['Vaccinated'] = false
console.log(student);
//delete
delete student.Vaccinated
console.log(student);

var car = {
    name:'boleno',
    model:"hatch batch",
    manufacturer:"maruti",
    price:'10lakhs'
}
//w.a.p to print the carname and manufacturer 
console.log(car['name']);
console.log(car['manufacturer']);


//check model key is present or not if present print the value
'model' in car?console.log(`model is present car model is ${car['model']}`):console.log('Not Prseent');

//add 'variant' key with manuel to given object
car['variant'] = ['manuel']
console.log(car);
//add new value 'automatic' to the varient key
car['variant'].push('automatic')
console.log(car);
//add a new key as 'color' with value 'red','blue' and yellow 
car['color']=[];
car['color'].push('red','blue','yellow')
console.log(car);

txt = 'hai hello all hello world all'
//w.a.p to find the word of the given txt
arr1 = txt.split(' ')
len = arr1.length
word={}
for(i=0;i<len;i++){
    count = 1
    for(j=i+1;j<len;j++){
        if(arr1[i] == arr1[j]){
            count++
    
        }
    }
    word[arr1[i]] = count
    
}
console.log(word);

op = {}
 words = txt.split(' ')
 for(let item of words){
    if(item in op){
        op[item]+=1
    }else{
        op[item] = 1
    }
 }
 console.log(op);
op={}
 txt.split(' ').forEach((item)=>item in op?   op[item]+=1:op[item] = 1);
 console.log(op);

 ar = [10,20,30,40,30,50,40,10,50,30]
 //wa.p prog to display the number count and display as object with key as the number and value as the count
 op = {}
 for(let item of ar){
    if(item in op){
        op[item]+=1
    }else{
        op[item] = 1
    }
 }
 console.log(op);
 //w.a.p to print first recursive or repeated alphabet
 //pattern = 'ABCDBCAD'


 weatherData=[
    {district:'Thrissur',weather:32},
    {district:'Kottayam',weather:29},
    {district:'Palakkad',weather:34},
    {district:'Ernakulam',weather:33},
    {district:'Thrissur',weather:29},
    {district:'Kottayam',weather:30},
    {district:'Palakkad',weather:32},
    {district:'Ernakulam',weather:31}
]
//print district with its highest temparature
op = {}
for(let data of weatherData){
    dist = data.district
    currTemp =  data.weather
    if(dist in op){
        oldTemp = op[dist]
        if(oldTemp>currTemp){
            op[dist] = oldTemp
        }else{
            op[dist] = currTemp
        }
    }else{
        op[dist] = currTemp
    }
}
console.log(op);

//output: {Thrissur:32, Kottayam:30,Palakkad:34,Ernakulam:33}

 products=[
    {pid:100,pName:'apple',band:'5g',price:120000,display:'led'},
    {pid:101,pName:'samsaung',band:'5g',price:45000,display:'led'},
    {pid:102,pName:'blackberry',band:'4g',price:50000,display:'led'},
    {pid:103,pName:'nokia',band:'3g',price:1200,display:'lcd'},
    {pid:104,pName:'motorola',band:'4g',price:10000,display:'lcd'}
]

//1. print product name only
for(let item of products){
    console.log(item.pName);
    
}

//2. print all mobile details whose display is lcd
    for(let item of products){
    if(item.display == 'lcd'){
        console.log(item);
        
    }
    
}
products.filter((item)=>item.display == 'lcd').forEach((item)=>console.log(item.pName));

//3. print 5g mobile phone name
 for(let item of products){
    if(item.band == '5g'){
        console.log(item.pName);
        
    }  
}
products.filter((item)=>item.band == '5g').forEach((item)=>console.log(item.pName));
console.log('-----------------------------------');

//4. sort mobile based on price
pro = products.sort((a,b)=>(a.price-b.price)).forEach((item)=>console.log(item.pName))
console.log('-----------------------------------');

//5. print costly mobile
    costly = products.reduce((pro1,pro2)=>pro1.price>pro2.price?pro1:pro2)
    console.log(costly.pName);
 console.log('-----------------------------------');
   
//6. print low cost mobile
 lc = products.reduce((pro1,pro2)=>pro1.price<pro2.price?pro1:pro2)
    console.log(lc.pName);
//Homework
ar = [10,20,30,40,30,50,40,10,50,30]
//wa.p prog to display the number count and display as object with key as the number and value as the count
 op = {}
 for(let item of ar){
    if(item in op){
        op[item]+=1
    }else{
        op[item] = 1
    }
 }
 console.log(op);

//w.a.p to print first recursive or repeated alphabet
pattern = 'ABCDBCAD'
op = {}
 words = pattern.split('')
 for(let item of words){
    if(item in op){
        op[item]+=1
        console.log('First repeated alphabet is',item);
        break
    }else{
        op[item] = 1
    }
 }
