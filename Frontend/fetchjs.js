//brought data from fakestoreapi application to our application
//fetch by fetch sets get data
fetch('https://fakestoreapi.com/products').then((response)=>{//url-promise-positive response only get in then method
    console.log(response);//to remove lot of data and get body-array of object- json() 
    response.json().then((products)=>{ // .json used to return necessary data(this  returns promise so used then(consoled the result))  
        console.log(products);
        products.forEach(item => {
            result.innerHTML +=`<div class="col mb-5">
                    <div class="card h-100">
                        <!-- Product image-->
                        <img class="card-img-top" src=${item.image} style="height:300px" alt="..." />
                        <!-- Product details-->
                        <div class="card-body p-4">
                            <div class="text-center">
                                <!-- Product name-->
                                <h5 class="fw-bolder">${item.title}</h5>
                                <!-- Product price-->
                               <span class="text-primary"> ${item.price}</span>
                            </div>
                        </div>
                        <!-- Product actions-->
                        <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                            <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">View options</a>
                            </div>
                        </div>
                    </div>
                </div>`
        });
        
    })
    
}).catch((error)=>{
    console.log(error);
    
})