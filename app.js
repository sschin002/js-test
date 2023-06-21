// const http= require("http");
// const dt = require("./myFirstModule");
// const uc =require("upper-case");

// http.createServer((req,res)=>{
//     res.writeHead(200,{'Content-Type':'text/html'});
//     const message =uc.upperCase("hello world");
//     res.end( message + " " +dt.myDateTime());
// }).listen(8081);
// console.log('App running on port 8080');

const fs = require('fs');
const rs = fs.createReadStream('./file.txt');
rs.on('open',() =>{
    console.log('the file is opened');
})