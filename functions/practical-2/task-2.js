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