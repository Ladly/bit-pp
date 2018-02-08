function numOfApp(str, char) {
    num = 0
    numOfass = 0 // :D  anyways this is other part of task
    for(var i = 0; i < str.length; i++) {
        if(str[i] === char) {
            num ++
        } else if (str[i] === 'a') {
            numOfass ++
        } else if (str[i] === "A") {
            numOfass ++
        }
    }
    return numOfass
}

randStr = "raaaandomStrinAAng"

console.log(numOfApp(randStr, "s"))