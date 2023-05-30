const http=require('http');
const fs=require('fs');

const server=http.createServer((req,res)=>{
    // console.log(req.url,'1',req.method,'2',req.headers,'3');
    const url=req.url
    if (url==='/'){
        res.write('<html><head><title>NODEJS</title></head><body><form action="/message" method="POST" ><input type=text name=msg><button>Add</button></form></body></html>');
        res.end();
    }
    if(url==='/message'){
        fs.writeFileSync('message.txt','This is Dummy data');
        res.statusCode=302;
        res.setHeader('Location','/');
        return res.end()
    }
    if (url==='/test'){
        res.write('<html><head><title>NODEJS</title></head><body><h1>this is test page</h1></body></html>');
        res.end();
    }
})

server.listen(4000)