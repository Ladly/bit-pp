// Write a function to alphabetize words of a given string. Alphabetizing a string means rearranging the letters so they are sorted from A to Z.

"use strict"

var randomString = "This is my rifle there are many like this but this one is mine"
	
function alphabetizeWords(str) {
    var strToArray = str.split(" ")   
    var newArray = []
    for(var i = 0; i < strToArray.length; i++) {  
       newArray.push(strToArray[i].split("").sort().join(""))
    }
    return newArray.join(" ")
}

console.log(alphabetizeWords(randomString));
