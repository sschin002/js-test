const person ={
    firstName :"sachin",
    lastName :"shrestha",
    age :22,
    fullName :()=>{
        return person.firstName +" "+person.lastName;
    }
}
const fname=person.fullName();
console.log(fname);

