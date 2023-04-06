const http = require('http');
const server = http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end("hello world")
    }
    if(req.url ==='/about'){
        res.end('here is the about')
    }
    res.end(`
    <h1>OOPS!</h1>
    <a href="/">back home</a>`)
})

server.listen(8080);