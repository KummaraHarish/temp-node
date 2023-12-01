var http= require('http')

http.createServer(function(req,res){
    res.write("hello hai welcome to alien")
    res.end
}).listen(8000)

//this is app.js file