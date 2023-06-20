// // var a='123';
// // console.log(a);

// // //using let keyword
// // let b ='45';

// // console.log(b);
// // //using const keyword
// // const c = 67;
// // console.log(c);
// // // alert("hello")
// // const age =prompt('age?');
// // console.log(age);
// // const a= confirm("are u a student");
// // console.log(a);
// let x=1;
// const y =2;

// if(x==1 && y===2){
//     console.log("&& operator tested")
// }
// if((x=1)|| (y=3)){
//     console.log("|| operator tested")
// }
// if (x!=2){
//     console.log("! operator tested")
// }
// console.log("test for git push");
// if(x===1){
//     console.log("x is 1");
// }
// else{
//     console.log("x is not 1");
// }
// let res = x===1? "x is 1": x===2? "x is not 2": "x is not 1 or 2";
// console.log(res);
// for (let i= 0; i<5; i++){
//     console.log(i);
// }
// function greet(name){
//     alert(`hello, ${name}`);
//     console.log(`hello ${name}`);
// }
// greet("sachin");

// const add =(a,b)=>{
//     console.log(a+b);
// }
// const person ={
//     firstName :"sachin",
//     lastName :"shrestha",
//     age :22,
//     fullName :()=>{
//         return person.firstName +" "+person.lastName;
//     }
// }
// const fname=person.fullName();
// console.log(fname);


// const cars =["volvo", "Buggati", "BMW", 46,{name:"Alto"}];
// const a= cars[0];
// console.log(a);
// const sl= cars[cars.length-1];
// console.log (sl);

// console.log(cars.push("new"));
// console.log(cars);
// cars.pop();
// console.log(cars);
// const myFunction=(data)=>{
//     console.log(data)
// }
// cars.forEach(myFunction);
// cars.map(d=>console.log(d));
//user model
// const user ={
//     fName:"sachin",
//     lName:"sth",
//     password:"123456",
// }
// const{password, ...rest}=user;
// console.log({"1":rest});

const arr=["sachin","shrestha","gachhe"];
const[second, ...other]=arr;

console.log(other);
console.log(second,other);