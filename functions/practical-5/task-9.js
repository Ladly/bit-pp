// Write a function to find the median element of array.

"use strict"

function findMedian(arr) {
    var resultElement;
    var median = 0

    if (arr.length % 2 !== 0) {
        median = (arr.length - 1) / 2;
        resultElement = arr[median]
    } else {
        median = (arr.length / 2) - (arr.length % 2)
        resultElement = [arr[median - 1], arr[median]]
    }

    return resultElement
}

console.log(findMedian([1, 2, 3, 4, 5, 6, 7, 8, 9]))