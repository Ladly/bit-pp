// Write a function that concatenates a given string n times (default is 1).
// 	"Ha" -> "Ha"
// "Ha", 3 -> "HaHaHa"

"use strict"

function concat(givenString, numOfCat) {
    var resStr = ""
    for(var i = 0; i < numOfCat; i++) {
        resStr += givenString
    }
    return resStr
}

console.log(concat("ha", 4))