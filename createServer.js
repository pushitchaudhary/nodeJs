const http = require('http');
http.createServer((req,res)=>{
    res.write("hello nepal")
    res.end();
}).listen(4000);