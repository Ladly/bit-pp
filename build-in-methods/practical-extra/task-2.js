// Write a functional expression that removes all duplicates in a given array.
// Input: [8, 13, 8, 9, 12, 8, 1, 1, 4, 13]
// Output: [1, 4, 8, 9, 12, 13] 

var input = [8, 13, 8, 9, 12, 8, 1, 1, 4, 13]

function removeDuplicates(array) {
    "use strict";
    var duplicateLess = [];
    
    array.sort(function(a, b) {
        return a - b;
    });

    for (var i = 0; i < array.length; i++){
        if(array[i-1] === array[i]) {
            continue;
        } else {
            duplicateLess.push(array[i]);
        }
    }

    return duplicateLess;    
}


console.log(removeDuplicates(input));