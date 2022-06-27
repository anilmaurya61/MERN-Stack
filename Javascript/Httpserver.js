const http = require("http");

const PORT = 2000;
const hostName ="localhost";

const server = http.createServer((req,res)=>{
    console.log(req.url);

    res.end("<h1>HELLO WORLD</h1>");
})

server.listen(PORT,hostName,()=>{
    console.log(`Server is working on http://${hostName}:${PORT}`);
})