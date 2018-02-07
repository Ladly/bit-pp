function concat(givenString, numOfCat) {
    resStr = ""
    for(var i = 0; i < numOfCat; i++) {
        resStr += givenString
    }
    return resStr
}

console.log(concat("ha", 4))