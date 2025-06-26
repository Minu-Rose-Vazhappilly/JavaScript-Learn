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