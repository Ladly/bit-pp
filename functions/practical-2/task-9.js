//unfinished
function splitter(str, separator) {
    newString = ""
    if (separator === undefined) {
        separator = "-"
    }

    for (var i = 0; i < str.length; i++) {
        if(str[i] !== " ") {
            newString += str[i]
        } else {            
            newString += separator
        }       
    }
    return newString    
}

console.log(splitter("random string of  very cool words lol"));
