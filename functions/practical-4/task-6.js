// Write a program that checks if a given array is symmetric. An array is symmetric if it can be read the same way both from the left and the right hand side.   
// Input array: [2, 4, -2, 7, -2, 4, 2]
// Output: The array is symmetric.

// Input array: [3, 4, 12, 8]
// 	Output: The array isn’t symmetric.


function isSymetric(arr) {
    var behind = ""
    var inputStr = ""
    var result = ""
    for(var i = arr.length - 1; i >= 0; i--) {   // maybe to half their size?
        behind += arr[i]
    }

    for (var j = 0; j < arr.length; j++) {
        inputStr += arr[j]
        
    }

    if( behind === inputStr ) {
        result = "The array is symmetric"
    } else {
        result = "The array isn’t symmetric"        
    }

    return result 
}

console.log(isSymetric([3, 4, 12, 8]));


 