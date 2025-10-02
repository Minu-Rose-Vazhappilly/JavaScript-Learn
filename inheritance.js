//Single Inheritance
class A{
    methoda(){
        console.log('Inside method A');
        
    }
}
class B extends A{
    methodb(){
        console.log('inside method B');
        
    }
}
const obj = new B()
obj.methoda()
obj.methodb()
//Multilevel Inheritance

class A1{
    methoda1(){
        console.log('inside method a1');
    }
}
class B1 extends A1{
    methodb1(){
        console.log('inside method b1');
        
    }
}
class C1 extends B1{
    methodc1(){
        console.log('inside method c1');
        
    }
}
const obj1 = new C1()
obj1.methodc1()
obj1.methodb1()
obj1.methoda1()

//Hierarchical
class A11{
    methoda11(){
        console.log('inside method a11');
        
    }
}
class B11 extends A11{
    methodb11(){
        console.log('inside method b11');
        
    }
}
class C11 extends A11{
    methodc11(){
        console.log('inside method c11');
        
    }
}
const obj2 = new C11()
obj2.methoda11()
const obj3 = new B11()
obj3.methoda11()
//Multiple Inheritance

