// Write a function that checks if a given array has odd number of elements.
// Input: [1, 2, 9, 2, 1]
// Output: true

// Write a function that counts the number of elements less than the middle element. If the given array has an even number of elements, print out an error message. 
// Input: [-1, 8.1, 3, 6, 2.3, 44, 2.11]
// Output: 4

var input = [-1, 8.1, 3, 6, 2.3, 44, 2.11]

function oddNumberOfElements(array) {
    "use strict";
    if (array.length % 2 !== 0) {
        return true;
    }

    return false;
}

function middleElement(array, callback) {
    "use strict";
    
    var middleElementOfArray = array[Math.floor(array.length / 2)];
    var counter = 0;

    if (!callback(array)) {
        return "Error";
    }

    for(var i = 0; i < array.length; i++) {
        if(array[i] < middleElementOfArray) {
            counter++;
        }
    }

    return counter;
}

console.log(middleElement(input, oddNumberOfElements));
