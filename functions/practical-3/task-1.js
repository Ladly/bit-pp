function insertString(stringg, stringToInput, position) {
    newString = ""
    for (var i = 0; i < stringg.length; i++) {
        if (i === position) {
            newString += stringToInput
        } else {
            newString += stringg[i]
        }
    }
    return newString
}

console.log(insertString("nesto normalno", "frr", 3));
