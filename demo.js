const data =  require('./export')
const sayHi = (age)=>{
    console.log("Hello there "+age)
}

sayHi(data.age)

const num1=5
const num2=10

function addValues(){
    console.log(`The sum of is: ${num1 + num2}`)
}
addValues()