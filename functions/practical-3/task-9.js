// Write a function to hide email address.
// "myemailaddress@bgit.rs" -> "myemail...@bgit.rs"

"use strict"

function hideEmail(email) {
    var spreadOperator = "..."
    var hiddenEmail = ""
    var positionOfMonkey = 0

    for(var i = email.length; i >= 0; i--){
        if(email[i] === "@") {
            positionOfMonkey = i
        }
    }

    for(var j = 0; j < email.length; j++) {
        if(j < 7) {
            hiddenEmail += email[j]
        } else if(j === 7){
            hiddenEmail += spreadOperator
        } else if(j > 7 && j < positionOfMonkey) {
            continue
        } else if (j === positionOfMonkey) {
            hiddenEmail += "@"
        } else if (j > positionOfMonkey) {
            hiddenEmail += email[j]
        }
    }

    return hiddenEmail
}

console.log(hideEmail("myemailaddress@bgit.rs"));
