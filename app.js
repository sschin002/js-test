const http= require("http");
const dt = require("./myFirstModule");
const uc =require("upper-case");

http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'});
    const message =uc."hello world";
    res.end( message + " " +dt.myDateTime());
}).listen(8081);
console.log('App running on port 8080');

