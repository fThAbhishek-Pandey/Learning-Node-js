const http = require("http");
const server = http.createServer((req,res)=>{
    if(req.url== '/fth') {
        res.end("Feel The Happiness");
    } 
    else {
        res.end("You are trying to hit a wroung url");
    }
});
server.listen(8000, ()=> {
    console.log("server is Started");
});