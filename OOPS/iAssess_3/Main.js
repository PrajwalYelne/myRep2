// package CollectionsAndMap.iAssess_3;

var fs = require('fs');
var input=fs.readFileSync('input.txt').toString().trim().split('\n');
//fill your code

class Customer{
    constructor(name){
      this.name = name;
    }
     
    sayWelcome(){
         console.log("
