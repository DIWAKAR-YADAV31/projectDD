/*function fname(a,b){
    console.log(a+b)
}
fname(3,5)//function call*/
/*const val=(a,b)=>
{
    return a*b;
}
console.log(val(2,5))*/
/*const cal=(c,d)=>{
    return c+d
}
console.log(cal(2,5))*/

//without parameters
/*function fun(){
    console.log("hello")
}
fun();

function f1(a,b,c){
console.log("Hello",a)
console.log(c+b)
}
f1("Diwakar",2,5);


function f2(){
    return a+b
}
let a=10
let b=10
console.log(f2(a,b));


function f3(a,b){
     return a*b
}
console.log(f3(2,3))
//arrow functions
const g1=(a,b)=>{
    return a*b
}
console.log(g1(2,3))




//square the numbers

let g4=(a)=>{
    return a*a
}
console.log(g4(6))
//multiply with another number

var g3=(a)=>{
    return a*10
}
console.log(g3(5))

//using template literals concept

var g2=(m,n)=>{
    return m*n
}
console.log(`the return value:${g2(4,5)}`)*/
//FOR EACH METHOD
/*let names = ["Naresh","Ravi","Anjali","Sneha"];
names.forEach(function (name){
    console.log("Hello,"+ name + "!");
});*/

let arr=[1,2,3,4,5]
let newarr=arr.map((vaL)=>{
   return vaL*2;
});
console.log(newarr);


let celsiusTemps =[0,10,20,30]
let fahrenheitTemps = celsiusTemps.map((celsius)=>{
return (celsius*9/5)+32;
});
console.log(fahrenheitTemps);
//filter
let arr1=[1,2,3,4,5]
let newarr1=arr1.filter((vaL)=>{
   return vaL*2;
});
console.log(newarr1);


let marks=[35,67,89,22,50,18,90]
let passedstudents=marks.filter((marks)=>{
    return marks>=40;
});
console.log(passedstudents);

 


