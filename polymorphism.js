//method Overloading
class A{
    methoda(){
        console.log('inside method a');
        
    }
    methoda(n1){
        console.log(`the given number is ${n1}`);
        
    }
    methoda(n1,n2){
        console.log(`the given number is ${n1} ${n2}`);
    }
}const obj = new A()
obj.methoda(2)

//rest
class A1{
    methoda1(...arg){
        console.log(arg);
        let sum = arg.reduce((n1,n2)=>n1+n2)
        console.log(sum);
        
        
    }

}
const obj1 = new A1()
obj1.methoda1(1,2,3)
//method Overriding - executes last function
class AB{
    cal(n1,n2){
        let sum =  n1+n2
        console.log(sum);
        
    }
    cal(n1,n2){
        let pro =  n1*n2
        console.log(pro);
        
    }
    cal(n1,n2){
        let diff =  n1-n2
        console.log(diff);
        
    }
}
const ab = new AB()
ab.cal(10,2)