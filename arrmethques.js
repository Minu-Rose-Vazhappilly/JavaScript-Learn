//[id,name,price,stock]
products=[
    [1,'hide and seek',50,20],
    [2,'lays',20,80],
    [3,'oreo',40,100],
    [4,'parleG',25,10],
    [5,'tiger',20,30],
    [6,'unibic',60,0],
    [7,'good day',70,20]
]
//1. display all product name
products.forEach(element => {
    console.log(element[1]);
    
});
console.log('----------------2---------------');


//2. display product name whose price < Rs.50
products.filter((item)=>item[2]<50).forEach((item)=>console.log(item[1]));
console.log('--------------3-----------------');

//3. print price of oreo
products.filter((item)=>item[1]=='oreo').forEach((item)=>console.log(item[2]));
console.log('---------------4----------------');
//4. print costly product name
highprice=products.reduce((acc,item)=>acc[2]>item[2]?acc:item)
console.log(highprice[1]);
console.log('----------------5---------------');
//5. display out of stock product name
products.filter((item)=>item[3]==0).forEach((item)=>console.log(item[1]));
console.log('----------------6---------------');
//6. sort products based on stock in descending order
products.sort((n1,n2)=>n2[3]-n1[3])
console.log(products);
console.log('----------------7---------------');

//7. print product name having maximum available stock

highstock=products.reduce((acc,item)=>acc[3]>item[3]?acc:item)
console.log(highstock[1]);
console.log('----------------8---------------');
//8. is there any product can be purchased by Rs. 10
purchased = products.some((item)=>item[2]<=10)
console.log(purchased?'Present':'Not Present');
console.log('----------------9---------------');
//9. Is there any product in the range of 10 to 30Rs
even = products.some((item)=>item[2]>=10 && item[2]<=30 )
console.log(even?'Present':'Not Present');
console.log('--------------10-----------------');
//10. print all products in the range of 10 to 30Rs
products.filter((item) => item[2] >= 10 && item[2] <= 30).forEach((item) => console.log(item[1]));
