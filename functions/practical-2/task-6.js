//  unfinished

function returnLast(str, char) {
    var lastChar = 0
    for(var i = 0; i < str.length; i++){
        if(str[i] === char) {
            lastChar = i
            console.log(lastChar)
            break;
            continue;
            console.log(i)
        }
              
    }
    return lastChar 
}

console.log(returnLast('somestrimg', 'm'));

