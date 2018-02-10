// Write a function to find a word within a string.

// 'The quick brown fox', 'fox' -> "'fox' was found 1 times"
// 'aa, bb, cc, dd, aa', 'aa' -> "'aa' was found 2 times"

function findWord(str, word) {
    var wordCounter = 0;
    var wordContainer = ""
    var wordArray = []
    var wordArrayIndex = -1
    
    for(var i = 0; i < str.length; i++) {    
        wordContainer += str[i]
       if(str[i] ===  " " || i === str.length - 1) {
           wordArrayIndex++           
           wordArray[wordArrayIndex] = wordContainer;
           wordContainer = ""           
       }       
        
    }

    for( var j = 0; j < wordArray.length; j++){
        if(wordArray[j] === word || wordArray[j] === word + ", " || wordArray[j] === word + " ") {
            wordCounter++          
        }
    }

    return word + " was found " + wordCounter + " times" 
}

console.log(findWord('The quick fox brown fox', 'fox'));
