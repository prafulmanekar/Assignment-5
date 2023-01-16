var http = require("http");

const httpServer = http.createServer(handleServer);


function handleServer(req, res) {
    let pathname=req.url;

    if(pathname==='/'){
        res.end("Hello World")
    }
   else if(pathname==='/welcome'){
        res.writeHead(200,{
            "Content-type":"text/plain"
        })
        res.end("Welcome to Dominos!")
    }
    else if(pathname==='/contact'){
        res.writeHead(200,{
            "Content-type":"application/json"
        })
        res.end(JSON.stringify({
            phone: '18602100000', 
  	        email: 'guestcaredominos@jublfood.com' 
        }))
    }
    else{
        res.writeHead(404,{
            "Content-type":"text/html"
        })
        res.end('<center><h1>Page is not found</h1></center>')
    }
}
httpServer.listen(8081,()=>{
    console.log('Server is listening');
})

module.exports = httpServer;