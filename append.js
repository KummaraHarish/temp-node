var fs= require('fs')

fs.appendFile('about.js','console.log("appended")', function(err){
        console.log("appended")
})