
const calculator=require('./Calculator')

console.log('hello ! I am learning Node JS ');

function greeting()
{
    console.log("Good morning sir ");
}
greeting()

calculator.addition(4,5);
calculator.subtraction(4,5);
calculator.multiplication(4,5);
calculator.division(4,5);


const os=require('os')

console.log(os.arch())
console.log(os.platform())
console.log(os.networkInterfaces())
console.log("hello ")
console.log(os.cpus())

console.log("_______________________________________________________________")


const path=require('path')

let ext=path.extname('D:\NodeJS_Scaler\Calculator.js')
let baseName=path.basename('D:\NodeJS_Scaler\Calculator.js')

console.log(ext)
console.log(baseName)
console.log(__filename)
console.log(__dirname)

const fs=require('fs')

let fileContent=fs.readFileSync('fs1.txt');
console.log('data of files is -> '+fileContent)

fs.writeFileSync('fs1.txt','hello shri ram ji here ')
console.log('data change')

fs.appendFileSync('fs1.txt' , ' I am big follower of shri ram ji')
console.log('done append ')


fs.unlinkSync('fs2.txt')
console.log('delt file')