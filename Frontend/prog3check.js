const check = (event) => {
    event.preventDefault()
    console.log('inside the function');
    console.log(age.value);
    if(age.value){
        if(age.value>=18){
        txt.innerHTML="eligible"
        txt.style.color = "green"
    }else if(age.value>0 && age.value<18){
        txt.innerHTML="not eligible"
        txt.style.color = "red"
    }else{
        txt.innerHTML="invalid input"
        txt.style.color = "orange"
    }
}else{
    txt.innerHTML="please Enter a value"
    txt.style.color = 'blue'
}
    

    
    
}