function createArr(str) {
    var createdArray = []
    for(var i = 0; i < str.length; i ++) {
        createdArray[i] = str[i]
        if(str[i] === " ") {
            createdArray[i] = null
        }
    }
    return createdArray
}

console.log(createArr("frrr gusteru"));
