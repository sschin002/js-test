// var a='123';
// console.log(a);

// //using let keyword
// let b ='45';

// console.log(b);
// //using const keyword
// const c = 67;
// console.log(c);
// // alert("hello")
// const age =prompt('age?');
// console.log(age);
// const a= confirm("are u a student");
// console.log(a);
let x=1;
const y =2;

if(x==1 && y===2){
    console.log("&& operator tested")
}
if((x=1)|| (y=3)){
    console.log("|| operator tested")
}
if (x!=2){
    console.log("! operator tested")
}
console.log("test for git push");
if(x===1){
    console.log("x is 1");
}
else{
    console.log("x is not 1");
}
let res = x===1? "x is 1": x===2? "x is not 2": "x is not 1 or 2";
console.log(res);