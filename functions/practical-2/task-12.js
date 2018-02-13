// Write a function to calculate how many years there are left until retirement based on the year of birth. 
// Retirement for men is at age of 65 and for women at age of 60. If someone is already retired, a proper message should be displayed.

"use strict"

var yearOfBirth = 2000;

function calculatePensionYear(birthYear, sex) {
    pensionYear = ""
    workYear = 0
     if(sex === "male") {
        workYear = birthYear + 65
    } else if (sex === "female") {
        workYear = birthYear + 60
    }
    for(var i = yearOfBirth; i < workYear; i++) {            
    }
}

// hmmmm?