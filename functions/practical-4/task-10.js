// Write a program that inserts a given element e on the given position p in the array a. If the value of the position is greater than the array length, print the error message. 
// Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
// Output: [2, -2, 33, 78, 12, 5, 8]

"use strict"

var e = 78;
var p = 3
var a = [2, -2, 33, 12, 5, 8]

function insertElementOnGivenPosition(array, element, position) {
    var newArray = [];
    var newArrayIndex = 0

    if(position > array.length) {
        return "Error msg :D"
    }

    for(var i = 0; i <= array.length; i++) {
        if(i === position) {
            newArray[newArrayIndex] = element
            newArrayIndex++
        } else if(i > position){
            newArray[newArrayIndex] = array[i - 1]
            newArrayIndex++
        } else {
            newArray[newArrayIndex] = array[i]
            newArrayIndex++
        }
    }

    return newArray
}

console.log(insertElementOnGivenPosition(a, e, p))