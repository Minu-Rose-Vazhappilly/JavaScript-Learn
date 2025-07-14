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

//[ no, district,  +ve cases,  death rate,  curred rate,  1st dose vaccine,  2nd dose vaccine]
covid_data = [
    [1,  'Ernakulam',  34000,  2000,  23000,  20000,  2000],
    [2,  'Idukki',     14000,  3000,  25000,  30000,  1000],
    [3,  'Thrissur',   24000,  4000,  33000,  24000,  2500],
    [4,'Pathanamthitta',20000, 2000,  45000,  22000,  1500],
    [5,  'Kozhikode',   44000,  5000,  12000, 21000,  500],
    [6,  'Palakkad',   12000,  1000,  20000,  23000,  3400],
    [7,  'Kottayam',  27000,  1500,  27000,  14000,  1000],
    [8,  'Kollam',    14000,  2500,  25000,  18000,  2700]

]
console.log('----------1------------');

//1. district having Highest +ve case 
        highpos=covid_data.reduce((acc,item)=>acc[2]>item[2]?acc:item)
        console.log(highpos[1]);
console.log('----------2------------');

//2. district having Highest 1st dose vaccine
 highdos=covid_data.reduce((acc,item)=>acc[5]>item[5]?acc:item)
        console.log(highdos[1]);
        console.log('----------3------------');
//3. district having lowest death rate
    lowdeath=covid_data.reduce((acc,item)=>acc[3]<item[3]?acc:item)
        console.log(lowdeath[1]);
        console.log('----------4------------');
//4. sort data with +ve case in descending order
        covid_data.sort((a,b)=>b[2]-a[2])
        console.log(covid_data);
        
//5. is district with +ve cases > 15000
    let hasHighCases = covid_data.some(item => item[2] > 15000)?'yes':'no';
    console.log(hasHighCases); // true

//6. sort data with 1st dose vaccine ascending order
    sortByFirstDose = covid_data.sort((a, b) => a[5] - b[5]);
    console.log(sortByFirstDose);

//7. Print Thrissur details
    let thrissur = covid_data.find(item => item[1] == 'Thrissur');
    console.log(thrissur);

//8. Print total number of positive cases
totalpos=covid_data.map(item=>item[2])
totalPositive = totalpos.reduce((poscase, poscase1) => poscase + poscase1);
console.log(totalPositive);
//9. Print total number of curred cases
totalcur=covid_data.map(item=>item[4])
totalCured = totalcur.reduce((acc, item) => acc + item);
console.log("Total cured cases:", totalCured);
//10. Print curred cases in Idukki
idukki = covid_data.find(item => item[1] === 'Idukki');
console.log("Idukki cured cases:", idukki[4]);