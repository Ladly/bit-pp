// Write a program that intertwines two arrays. You can assume the arrays are of the same length. 
// Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
// Output array: [4, 3, 5, 8, 6, 11, 2, 9]

"use strict"

function intertwines(arr1, arr2) {
    var outputArr = []
    var outputArrayIndex = 0
    for(var i = 0; i < arr1.length; i++) {
        outputArr[outputArrayIndex] = arr1[i]
        outputArrayIndex += 2
    }

    outputArrayIndex = 1;
    for (var j = 0; j < arr2.length; j++) {
        outputArr[outputArrayIndex] = arr2[j]
        outputArrayIndex += 2
    }

    return outputArr
}

console.log(intertwines([4, 5, 6, 2], [3, 8, 11, 9]));

