//w.a.p to find a given number is mobile number or not
mob = '94476929'
s2 = Array.from(mob)
count = 0
s2.forEach(element => {
    count++
});
if(count==10){
    console.log('valid mobile number');
    
}else{
    console.log('not a valid mobile number');
}
// another method
console.log(mob.length==10?'yes':'no');
//w.a.p to check a given mail is gmail or not
const checkMail = (mail)=>{
    console.log(mail.endsWith('@gmail.com')?'Its a gmail id':'not a gmail id');
    
}
checkMail('anu@gmail.com')
//homework
//w.a.p to check a given work starts with letter q