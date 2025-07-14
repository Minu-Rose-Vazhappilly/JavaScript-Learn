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

