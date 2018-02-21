// Write a functional expression that duplicates each element of a given array.
// Input: [2, 4, 7, 11, -2, 1]
// Output: [2, 2, 4, 4, 7, 7, 11, 11,  -2, -2, 1, 1]

var input = [2, 4, 7, 11, -2, 1]

function doubleTime(array) {
    "use strict";
    var resultArray = [];

    for ( var i = 0; i < array.length; i++) {
        resultArray.push(array[i])
        resultArray.push(array[i])
    }

    return resultArray;
}

console.log(doubleTime(input));
