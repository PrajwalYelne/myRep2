
var fs = require('fs');
var name = fs.readFileSync('input.txt').toString();
let str =name.trim().split(",");
 
//Fill your code here
let Person = {
    name : str[0]
}

let Employee = {
 employeeId : str[1]
}

Employee._proto_=Person;


