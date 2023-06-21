const http= require("http");
const dt = require("./myFirstModule");

http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end('Hello World its' + " " +dt.myDateTime());
}).listen(8081);
console.log('App running on port 8080');

