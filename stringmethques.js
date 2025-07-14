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
//w.a.p to check a given word starts with letter q
const checkWork = (work)=>{
    console.log((work.startsWith('q') ||work.startsWith('q'))?"Given Work starts with q":"Not starts with q");
    
}
checkWork('Developer');
//w.a.p to print all vowels from a given string 
sentence = "Hai every one"
elem = []
lowsen = sentence.toLowerCase()
 arr = Array.from(lowsen)
 arr.forEach(element => {
    if(element == 'a' ||element == 'e'||element == 'i'||element == 'o'||element == 'u' ){
       elem.push(element) 
        
    }
 });
 console.log(elem);
 console.log('----------another method-----------');
 vowel = ['a','e','i','o','u','A','E','I','O','U']
 characters = sentence.split('')
 for(let item of characters){
    if(vowel.includes(item)){
        console.log(item);
        
    }
 }
 console.log('--------------------------');
//w.a.p to print whether a string is palindrome or not
str = 'malayalam'
len = str.length
console.log(len);
str1 = Array.from(str)
pal = 1
i = 0
j=len - 1
while(i < j){
    if(str[i]!==str[j]){
        pal = 0
    }
    i++;
    j--;
}
if(pal == 1){
    console.log("yes its palindrome");
    
}else{
    console.log("No its not palindrome");
    
}
console.log('Another method');
str1 = 'MALAYALAM'
pal = ''
for(i=str1.length-1;i>=0;i--){
    pal+=str1[i]
}
console.log((pal==str1)?"Yes its palindrome":"No its not");



 
 