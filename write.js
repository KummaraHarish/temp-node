var fs = require('fs')

fs.writeFile('about.js','console.log("done")', function(err){
    console.log("Data Saved")
})

//this is write file