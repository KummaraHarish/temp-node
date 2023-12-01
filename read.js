var fs= require('fs')
    fs.readFile('cal.js','utf8', function(err, data){
       // console.log(data)
    })

    const {readFile} = require('fs')

    readFile('first.txt','utf8', (err,result) =>{
            if(err){
                console.log(err)
                return
            }
            console.log(result)
    })