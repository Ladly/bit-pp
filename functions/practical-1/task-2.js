// Write a function that checks if a given number is odd.

function isOdd(x) {
    dunno = ""
    if(x % 2 !==0) {
        dunno = "its Odd"
    } else {
        dunno = "its even"
    }
    return dunno
}

console.log(isOdd(7))