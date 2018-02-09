// Write a function to create a specified number of elements with pre-filled numeric value array.

// 6, 0 -> [0, 0, 0, 0, 0, 0]
// 2, "none" -> ["none", "none"]
// 2 -> [null, null] 

function fillArray(numberOfElements, element) {    
    var newArray = []
    if(element === undefined) {
        element = null
    }

    for(var i = 0; i < numberOfElements; i++) {
        newArray[i] = element
    }

    return newArray
}

console.log(fillArray(3));


