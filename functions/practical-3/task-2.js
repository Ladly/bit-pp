// Write a program to join all elements of the array into a string skipping elements that are undefined, null, NaN or Infinity.

"use strict"

var arrToJoin = [NaN, 0, 15, false, -22, '', undefined, 47, null]

function joinToString(arr) {
    var newString = ""
    
    for(var i = 0; i < arr.length; i++) {
        if(isFinite(arr[i]) === false || arr[i] === undefined || arr[i] === null){
            continue;         
        } else {
            newString += arr[i]
        }

    }

    return newString
}

console.log(joinToString(arrToJoin));


