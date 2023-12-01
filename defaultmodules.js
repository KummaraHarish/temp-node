const os = require('os')
const path = require('path')

const user = os.userInfo()
//console.log(user)

const currentOS = {
    name:os.type(),
    realse: os.release(),
    totalMem : os.totalmem(),
    freeMem : os.freemem()
}
//console.log(currentOS)
console.log(path.sep)

const filePath = path.join('/content/','subfolder','test.txt')
console.log(filePath)