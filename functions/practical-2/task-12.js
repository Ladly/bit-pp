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