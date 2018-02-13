// Write a function to check whether a string is blank or not.
"use strict"
function testIfBlank(inp) {
    if(typeof inp !== "string" || inp.length !== 1){
        return false
    } else {
        if(inp[0] === " ") {
            return true 
        } else {
            return false
        }
    }
}

console.log(testIfBlank("   agdwuikadgwiu"))