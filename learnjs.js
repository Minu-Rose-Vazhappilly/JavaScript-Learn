for(rows=1;rows<=5;rows++){
    str = ""
    for(cols=1;cols<=5;cols++){
        str += "* " 
    }
    console.log(str);
    
}
for(rows = 1;rows<=5;rows++){
    str = ""
    for(cols=1;cols<=5;cols++){
        str += rows + " "
    }
    console.log(str);
}
for(rows=1;rows<=5;rows++){
str=""
for(cols=1;cols<=5;cols++){
    str += cols
}
console.log(str);

}
for(rows=1;rows<=6;rows++){
str=""
for(cols=1;cols<=rows;cols++){
    str += cols
}
console.log(str);

}
for(rows=5;rows>=1;rows--){
str=""
for(cols=1;cols<=rows;cols++){
    str += cols
}
console.log(str);

}