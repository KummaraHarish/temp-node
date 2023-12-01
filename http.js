const http = require('http')

const server = http.createServer((req, res)=>{
    if(req.url==='/'){
        res.end("welcome to home page")
    }
    if(req.url==='/about'){
        res.end("here is our short story ")
    }
    res.end(`<h1>Opps!</h1>
    <p>We can't find this page rigth now..</P>
    <a href="/">back home</a>`
    )
    
})

server.listen(5000)

// const ser = http.createServer(function(req, res){
//     res.write("hey unnava bro")
//     res.end()
// })
// ser.listen(9000)