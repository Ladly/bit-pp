// Write a program that checks if a given element e is in the array a. 
// Input:  e = 3, a = [5, -4.2, 3, 7]
// Output: yes

// Input:  e = 3, a = [5, -4.2, 18, 7]
// Output: no

"use strict"

function isElement(arr, el) {
    var isIt = ""
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] === el) {
            isIt = "Yes"
            return isIt
        }
    }
    isIt = "No"
    return isIt
}

var e = 3
// a = [5, -4.2, 3, 7]
var a = [5, -4.2, 18, 7]

console.log(isElement(a, e));
