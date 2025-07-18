// employee = [1000,'Neel','developer','Kochi',25000,3]
//Encapsulation
class employee{
    empId  
    empName
    empDesig
    empLoc
    constructor(id,name,desig,loc){
    this.empId  = id
    this.empName = name
    this.empDesig = desig
    this.empLoc = loc
    }
    display(){
        console.log(`the given name is ${this.empName}`);
        
    }
}

const user1 = new employee(1000,'Neel','developer','kochi')
user1.display()

const user2 = new employee(1002,'Max','tester','tvm')
user2.display()

class Student{
    constructor(id,name,grade,mark){
        this.stdId = id
        this.stdName = name
        this.stdGrade = grade
        this.stdMark = mark
    }
    display(txt){
        console.log(txt);
        
        console.log(`student name is ${this.stdName} and score is ${this.stdMark}`);
        
    }
}
const std1 = new Student('1','anu','VI',200)
std1.display('Score')

class Bank{
    //property
    accountDetails = {
        1000:{acno:1000,username:'userone',password:'userone',balance:5000},
        1001:{acno:1001,username:'usertwo',password:'usertwo',balance:1000},
        1000:{acno:1002,username:'userthree',password:'userthree',balance:10000},
        1000:{acno:1003,username:'userfour',password:'userfour',balance:2000},
    }
    //w.a. method to validate the account number
    validate(acno){
        return acno in this.accountDetails?true:false
    }
    //w.a. method to authenticate the account details
        authenticate(acno,psw){
            if(this.validate(acno)){
                if(this.accountDetails[acno].password == psw){
                    console.log('authenticatio successfull');
                    
                }else{
                    console.log('invalid acno or password');
                    
                }
            }else{
                console.log('Invalid account number');
                
            }
        }
    //w.a method to have a balance enquiry
    //w.a method to transfer fund
}
const obj = new Bank()
console.log(obj.validate(1000)?'valid account number':'Invalid Account number');
obj.authenticate(1001,'usertwo')