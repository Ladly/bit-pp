// Write a function to find a word within a string.

// 'The quick brown fox', 'fox' -> "'fox' was found 1 times"
// 'aa, bb, cc, dd, aa', 'aa' -> "'aa' was found 2 times"

function findWord(str, word) {
    var wordCounter = 0;
    var wordContainer = ""
    var newArray = []
    var newArrayIndex = -1
    for(var i = 0; i < str.length; i++) {    
        wordContainer += str[i]
       if(str[i] === " ") {
           newArrayIndex++
           newArray[newArrayIndex] = wordContainer
           console.log(wordContainer)
           wordContainer = ""
       }       
        
    }
    console.log(newArray)

    return word + " was found " + wordCounter + " times" 
}

console.log(findWord('The quick brown fox', 'fox'));
