function shortIt(str, n) {
    var newStr = ""
    for(var i = 0; i < str.length; i++) {
        if(i !== n) {
            newStr += str[i]
        } else {
            newStr += "..."
            return newStr
        }
    }
}

console.log(shortIt("some cool string", 9));
