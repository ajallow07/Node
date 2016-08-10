//Pure functions
var vals = [
  3,
  4,
  6,
  7,
  9,
  12,
  25,
  100,
  1000
]
function square(x){
  return x * x
}
function squareAll(items){
  return items.map(square)
}
let result = squareAll(vals)

console.log(result)

//How use FP using node.js
/*

const fs = require('fs');
//import fs from 'fs'
var output = fs.readFileSync('data2.txt', 'utf8')
  .trim()
  .split('\n')
  .map(line =>line.split('\t'))
  .reduce((customers, line) => {
  customers[line[0]] = customers[line[0]] || []
  customers[line[0]].push({
    name: line[1],
    price: line[2],
    quantity: line[3]
  });
  return customers

}, {});

//console.log(output)

//Examole of Clusures in JScripts
var me = "Alieu Jallow"
function greetMe(){

  console.log('Hello', me +'!')
}

//greetMe()


//Currying a function
*/
