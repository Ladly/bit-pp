//Write a program to filter out falsy values from the array.
// [NaN, 0, 15, false, -22, '', undefined, 47, null]

var testArray = [NaN, 0, 15, false, -22, '', undefined, 47, null]

function removeFalsy(arr) {
    var newArray = []
    newArrayIndex = -1
    for(var i = 0; i < arr.length; i++) {
        if(!!arr[i] === false) {
            // is this thing on? lol
        } else {
            newArrayIndex++
            newArray[newArrayIndex] = arr[i]
        }
    }
    return newArray
}


console.log(removeFalsy(testArray));
