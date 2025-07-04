//callback function
function greet(name,callme){
    console.log(`hi,${name}`)
    callme();
}
function callback1(){
    console.log('inside the function');
    
}
greet('peter',callback1)
//nested function && closure property
function parent(){
    const x = "parent variable"
    console.log(x);
    
    console.log('inside parent function');
    function child(){
        console.log(x);
        console.log('inside child function');
        
    }
    child();
    
}
parent()