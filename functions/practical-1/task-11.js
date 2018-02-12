// Write a function that concatenates a given string given number of times. 
// For example, if “abc” and 4 are given values, the function prints out abcabcabcab

function concat(str, num) {
   var resStr = ""
   for(var i = 0; i < num; i++) {
       
       resStr += str
   } 
    return resStr
}

var someStr = "frr"
var randNum = 3

console.log(concat(someStr, randNum))