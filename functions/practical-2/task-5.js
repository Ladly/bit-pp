function returnFirst(str, char) {
    var indexx = 0
    for(var i = 0; i < str.length; i++) {
        if(str[i] === char) {            
            return i
        }
    }
    return -1    
}

console.log(returnFirst('frrrpppgg' , 'p'))