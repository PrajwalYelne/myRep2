var fs = require('fs');
var input = fs.readFileSync('input.txt').toString();
//fill your code
var op=Number(input);
function checkAge(op){
    if(op>=18)
    return true;
    else
    return false;
}
let x=checkAge(op);
if(x==true)
console.log('Allowed');
else
console.log('Not Allowed');
