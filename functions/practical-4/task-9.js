// Write a program that deletes a given element e from the array a. 
// Input: e = 2, a = [4, 6, 2, 8, 2, 2]
// Output array: [4, 6, 8]

"use strict"

// hmmm we have only delete in our arsenal and it will leave one empty space soooo: delete a[e] I guess is not an option
// lets complicate stuff a bit

var e = 2
var a = [4, 6, 2, 8, 2, 2]

function deleteGivenElement(array, element) {
    var newArray = []
    var newArrayIndex = 0

    for(var i = 0; i < array.length; i++){
        if(i !== element) {
            newArray[newArrayIndex] = array[i]
            newArrayIndex++            
        } else {
            continue;           
        }
    }

    return newArray
}

console.log(deleteGivenElement(a, e));
