function howMany(str, char) {
    var howManyz = 0
    for(var i = 0; i < str.length; i++) {
        if(str[i] === char) {
            howManyz ++
        }
    }
    return howManyz
}

console.log(howMany("My random string", "n"))