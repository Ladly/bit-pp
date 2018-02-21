// Write a function that finds the smallest element of a given array. The function should return an object that contains the smallest value and its last position in the array.
// Input: [1, 4, -2, 11, 8, 1, -2, 3]
// Output:  { minValue: -2, minLastIndex: 6 }

var input = [1, 4, -2, 11, 8, 1, -2, 3]

function findMin(array) {
    "use strict";
    var result = {};

    for ( var i = 0; i < array.length; i++) {
        result.minValue = Math.min(array[i-1], array[i]);
    }
    result.minLastIndex = array.lastIndexOf(result.minValue);

    return result;
}

console.log(findMin(input));
