// Write a program that concatenates two arrays. 
// Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
// Output array: [4, 5, 6, 2, 3, 8, 11, 9]

"use strict"

function concatenateArrays(arr1, arr2) {
    var arr = []
    var newArrIndex = 0;
    
    for(var i = 0; i < arr1.length; i++) {
        arr[newArrIndex] = arr1[i]
        newArrIndex++
    }

    for (var j = 0; j < arr2.length; j++){
        arr[newArrIndex] = arr2[j]
        newArrIndex++
    }

    return arr
}

console.log(concatenateArrays([4, 5, 6, 2], [3, 8, 11, 9]));

