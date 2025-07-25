//create an oinstance for the class
const http = new XMLHttpRequest()
console.log(http.readyState);

//establish connection
http.open('GET','https://jsonplaceholder.typicode.com/todos')

// Request send
http.send()


console.log(http.readyState);

http.onreadystatechange = ()=>{
    console.log(http.readyState);
    if(http.readyState == 4){
        if(http.status >=200 && http.status<300){
            // console.log(http.responseText);
            let alltodos = JSON.parse(http.responseText)
            console.log(alltodos);
            alltodos.forEach((item) => {
                result.innerHTML += `<tr><td>${item.userId}</td>
                <td>${item.id}</td>
                <td>${item.title}</td>
                <td>${item.completed}</td></tr>`
            });
            
            
        }else{
            console.log('No data');
            
        }

    }else{
        console.log('No Response');
        
    }
    
}
