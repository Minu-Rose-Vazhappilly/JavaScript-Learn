//pattern printing
// # # # # 
// # # # # 
// # # # #
// # # # #
for(rows=1;rows<=4;rows++){
    str = ""
    for(j=1;j<=4;j++){
        str = str + "# ";
    }
    console.log(str);
}
console.log('--------------------------------------');
// 1111
// 2222
// 3333
// 4444
for(rows=1;rows<=4;rows++){
    str = ""
    for(j=1;j<=4;j++){
        str = str + rows;
    }
    console.log(str);
}
console.log('--------------------------------------');
// 1 2 3 4
// 1 2 3 4
// 1 2 3 4
// 1 2 3 4
for(rows=1;rows<=4;rows++){
    str = ""
    for(j=1;j<=4;j++){
        str = str + j + " ";
    }
    console.log(str);
}
console.log('--------------------------------------');
// for(rows=1;rows<=4;rows++){
//     str = ""
//     for(j=1;j<=rows;j++){
//         str = str + j;
//     }
//     console.log(str);
// }


// *
// * *
// * * *
// * * * *
for(rows=1;rows<=4;rows++){
    str = "";
    for(j=1;j<=rows;j++){
        str = str + "*" +" ";
    }
    console.log(str);
    
}
console.log('--------------------------------------');
// 1 2 3 4
// 5 6 7 8
// 9 10 11 12
// 13 14 15 16
count = 1;
for(rows=1;rows<=4;rows++){
    str = ""
    for(j=1;j<=4;j++){
        str = str + count + " ";
        count++;
    }
    console.log(str);
}
// 1
// 1 2
// 1 2 3
// 1 2 3 4
console.log('--------------------------------------');
for(rows=1;rows<=4;rows++){
    str = ""
    for(j=1;j<=rows;j++){
        str = str + j + " ";
    }
    console.log(str);
}
// 1
// 2 2
// 3 3 3
// 4 4 4 4
console.log('--------------------------------------');
for(rows=1;rows<=4;rows++){
    str = ""
    for(j=1;j<=rows;j++){
        str = str + rows + " ";
    }
    console.log(str);
}
console.log('--------------------------');
// * * * *
// * * *
// * *
// *
for(rows=4;rows>=1;rows--){
    str = "";
    for(j=1;j<=rows;j++){
        str = str + "*" +" ";
    }
    console.log(str);
    
}
console.log('----------isosceles triangle--------------')
//    *
//   * *
//  * * *
// * * * *
rowscount = 4
for(rows=1;rows<=4;rows++){
    str = "";
    for(space=1;space<rowscount;space++){
        str+= " ";
        
    }
    rowscount--;
    // console.log(str);
    for(j=1;j<=rows;j++){
        str = str + "*" +" ";
    }
    console.log(str);
    
}
console.log('------------------Homework1--------------------');
// *
// * *
// * * *
// * * * *
// * * * * *
// * * * *
// * * *
// * *
// *

for(rows=1;rows<=5;rows++){
    str = "";
    for(j=1;j<=rows;j++){
        str = str + "*" +" ";
    }
    console.log(str);
    
}
for(rows=4;rows>=1;rows--){
    str = "";
    for(j=1;j<=rows;j++){
        str = str + "*" +" ";
    }
    console.log(str);
    
}
console.log('------------------Homework2--------------------');
//     *
//    * *
//   * * *
//  * * * *
// * * * * *
//  * * * *
//   * * *
//    * *
//     * 

for(rows=1;rows<=4;rows++){
    str = " "
    for(space = 4;space>rows;space--){
        str += " "
    }
    for(col=1;col<=rows;col++){
        str += "*" + " "
    }
    console.log(str);
    
}
for(rows=5;rows>=1;rows--){
    str = ""
    for(space = 5;space>rows;space--){
        str += " "
    }
    for(col=1;col<=rows;col++){
        str += "*" + " "
    }
    console.log(str);
    
}
console.log('--------------------');

for(rows=1;rows<=4;rows++){
    str = ""
    for(space=4;space>rows;space--){
        str +=" "
    }
    if(rows == 2 && rows == 3){
       for(cols=1;cols<=2;cols++){
        str+="*" + " "
    } 
    }
    for(cols=1;cols<=rows;cols++){
        str+="*" + " "
    }
    console.log(str);
    
}
for(rows=1;rows<=4;rows++){
    str = ""
    for(cols = 1;cols<=7;cols++){
        if(rows+cols == 5 || cols-rows == 3 || rows == 4){
            str = str + "* "
        }else{
        str +="  "
    }
    }
    console.log(str);
    
}
console.log('-----------------------------');

for(rows=1;rows<=5;rows++){
    str = ""
    for(cols = 1;cols<=5;cols++){
        if(rows == 1 || rows == 5 || cols == 1 || cols==5){
            str = str + "* "
        }else{
        str +="  "
    }
    }
    console.log(str);
    
}
console.log('-----------------------------');
for(rows=4;rows>=1;rows--){
    str = ""
    for(cols = 1;cols<=7;cols++){
        if(rows+cols == 5 || cols-rows == 3 || rows == 4){
            str = str + "* "
        }else{
        str +="  "
    }
    }
    console.log(str);
    
}
for(rows=2;rows<=4;rows++){
    str = ""
    for(cols = 1;cols<=7;cols++){
        if(rows+cols == 5 || cols-rows == 3 || rows == 4){
            str = str + "* "
        }else{
        str +="  "
    }
    }
    console.log(str);
    
}
console.log('-------------------------------');
for(rows=1;rows<=5;rows++){
    str = ""
    for(cols=1;cols<=5;cols++){
        if(rows==1 || rows == 5 || rows+cols == 6 || cols==rows){
            str = str + "* ";
        }else{
        str +="  "
    }
    }
    console.log(str);
}
console.log('----------------------------------');

for(rows=1;rows<=4;rows++){
    str = ""
    for(cols=1;cols<=rows;cols++){
        if((rows+cols)%2 == 0){
            str = str + "1 "
        }else{
            str = str + "0 "
        }
    }
    console.log(str);
    
}
console.log('------------------------------');

rowscount = 5
count = 11
for(rows=1;rows<=5;rows++){
    str = "";
    for(space=1;space<rowscount;space++){
        str+= "    ";
        
    }
    rowscount--;
    // console.log(str);
    for(cols=1;cols<=(2*rows - 1);cols++){
        str = str + count +"  " ;
        count++
    }
    console.log(str);
    
}