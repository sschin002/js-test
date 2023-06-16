//print hello world
console.log("Hello World!");

//set the value of pi
const pi = 3.14;

//add two number
const add= (a,b) =>{
    if(a!=b){
        console.log(a+b);
    }
    else{
        console.log (3*a);
    }
}
add(2,3)
add(3,3);

//check multiple
const check =(a) =>{
    if(a<0){
        console.log("Negative number");
    }
    else{
        if((a%3==0) || (a%7==0)){
            console.log(`Number ${a} is multiple a of 3 or 7`);
        }
        else{
            console.log(`Number ${a} is not multile of 3 or 7`)
        }
    }
}
check(6);
check(14);
check(22);

//get current date
const date = Date();
console.log(date);  

//calculate multiple or division of two numbers
const calc= (a,b)=> {
    console.log(`Multiplication of ${a} and ${b} is ${a*b}`);
    console.log(`Divison of ${a} and ${b} value is ${a/b}`);
}
calc(10,5);

//temperature conversion
const convToFreren= (c)=> {
    let f= ((9*c)/5)+32;
    console.log(`the temperature in farenheit is ${f}`);
}
const convToCel= (f)=> {
    let c= ((f-32)/9)*5;
    console.log(`The temperature in celcius is ${c}`);
}
convToFreren(60);
convToCel(45);

//count the vowels
const count= (string)=> {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    string=string.toLowerCase();
    for (const letter of string) {
        if (vowels.includes(letter)) {
          count++;
        }
    }
    console.log(`Number of vowels is ${count}`);
}
count('Sachin');

