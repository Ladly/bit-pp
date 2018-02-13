// Write a program that finds the minimum of a given array and prints out its value and index. 
// Input array: [4, 2, 2, -1, 6]
// Output: -1, 3

"use strict"

function findMin(arr) {
    var min = Infinity
    var index = arr.length
    
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < min ) {
            min = arr[i]
            index = i
        }
    }

    return min + ", " + index
}


var input = [4, 2, 2, 1, 6]

console.log(findMin(input));



// note: what if all numbers are greater than zero?
// well mess it up a bit
// will try to test some solutions in next exemple and come to fix it

// maybeSolution: initialize min = infinity ??