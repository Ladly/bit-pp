// Write a function that calculates the maximum of two given numbers. 

function minMax(x, y) {
    var max = 0
    if(x >= y) {
        max = x
    } else {
        max = y
    }
    return max
}

console.log(minMax(7,9))