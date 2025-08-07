/*let i=100
for(i=0;i<=100;i+=2){
console.log(i);
}*/
/*let arr=[1,2,3,4,5];
for(let element of arr){
    console.log(element*element)
}*/

/*let n = 6;
for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {
        if (i === 0 || j === 0 || i === n - 1 || j === n - 1) {
            row += "*";
        } else {
            row += " ";
        }
    }
    console.log(row);
}*/

//String concepts

/*let str1=" welcome to mrec college "
let str2="campus"
console.log("length",str1.length)
console.log("index",str1[6])
console.log("uppercase",str1.toUpperCase())
console.log("lowercase",str1.toLowerCase())
console.log("trim",str1.trim())
console.log("concat",str1.concat(str2))
console.log("slice",str1.slice(0,3))
console.log("charaAt",str1.charAt(3))
console.log("replace",str1.replace('college','university'))
console.log("slice",str1.slice(0,5))  */
//1.write a java script program that takes a userfull name and creates a user name in the following format:
   //start with @followed by the full name,and then the length of name
let username="darga Diwakar"
console.log(`@ ${username + username.length}`);

//2.check if the 3rd character of a given string Is a vowel or not.
let x=username[3]
if(x=='a'||x=='e'||x=='i'||x=='o'||x=='u'||x=='A'||x=='E'||x=='I'||x=='O'||x=='U'){
    console.log("vowel")

}
else{
    console.log("not a vowel")
}
//3.replace all spaces in a string with underscore(_)to make it URL-friendly
console.log(username.replace(' ','_'))

//4. Given a string, convert the first character to uppercase and the rest to lowercase.
console.log(username.charAt(0).toUpperCase()+username.slice(1,13).toLowerCase())



