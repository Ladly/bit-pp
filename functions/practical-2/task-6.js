function returnLast(str, char) {
    var lastChar = 0
    for(var i = 0; i < str.length; i++){
        if(str[i] === char) {
            lastChar = i
        }              
    }
    return lastChar 
}

console.log(returnLast('somestrimgawhdiuahwm', 'm'));

