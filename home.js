const express = require('express')

const app = express();

app.get('/', function(req,res){
    res.send("Hello World!")
   // console.log("Hello World")
})

app.get('/alien', function(input,output){
        output.send("welcome back alien!")
})

app.get('/alien/:id',function(req,res){
    const id =req.params.id
    res.send("Hey Harish"+id)
})
app.listen(9000, function(req,res){
    console.log('Running...')
});