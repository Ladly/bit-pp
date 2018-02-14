// Write a function to find the maximum and minimum elements. Function returns an array.

"use strict"

var input = [3, 1, 2, 3, 4, 5, 6]

function arrayMinMax(arr) {
    var min = Infinity;
    var max = - Infinity

    for( var i = 0; i < arr.length; i++) {
        if(arr[i] < min) {
            min = arr[i]
        } else if (arr[i] > max) {
            max = arr[i]
        }
    }

    return [min, max];
};

console.log(arrayMinMax(input));