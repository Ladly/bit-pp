//unfinished
function splitter(str, separator) {
    newString = ""
    if (separator === undefined) {
        separator = "-"
    }

    for (var i = 0; i < str.length; i++) {
        newString += str[i]
        if(str[i] === " ") {
            console.log(str[i]);            
            newString += separator
        }       
    }
    console.log(newString)    
}

console.log(splitter("random string of words lol", "_"));
