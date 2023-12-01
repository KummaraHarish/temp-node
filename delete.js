var fs = require('fs')

fs.unlink('about.js',function(err){
    console.log("Deleted")
})