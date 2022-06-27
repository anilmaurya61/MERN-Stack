const http = require("http");

const fs = require("fs");

const home = fs.readFileSync("./index.html");

const PORT = 2003;
const hostName ="localhost";

const server = http.createServer((req,res)=>{
    if(req.url=="/"){
        res.end(home);
    }
    else if(req.url=="/about"){
        res.end("<h1>About Page</h1>");
    }
    else if(req.url=="/contact"){
        res.end("<h1>Contact Page</h1>");
    }
    else{
        res.end("<h1>404 Page Not Found</h1>");
    }

})

server.listen(PORT,hostName,()=>{
    console.log(`Server is working on http://${hostName}:${PORT}`);
})