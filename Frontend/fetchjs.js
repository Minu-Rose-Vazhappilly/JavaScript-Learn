//fetch by fetch sets get data
fetch('https://fakestoreapi.com/products').then((response)=>{//url-promise-positive response only get in then method
    console.log(response);//to remove lot of data and get body-array of object- json() 
    response.json().then((products)=>{ // .json used to return necessary data(this  returns promise so used then(consoled the result))  
        console.log(products);
        
    })
    
}).catch((error)=>{
    console.log(error);
    
})