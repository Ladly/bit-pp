var addFacultyButton = document.querySelector(".add-faculty");
var addProfessorButton = document.querySelector(".add-professor");
var addStudentButton = document.querySelector(".add-student");
var faculties = [];
var professors = [];

addFacultyButton.addEventListener("click", function(){
    createAndAddFaculty();
});

addStudentButton.addEventListener("click", function(){
    createAndAddStudent();
});

addProfessorButton.addEventListener("click", function(){
    createAndAddProfessor();
});

function createFaculty(name) {
    return new Faculty(name);
}

function createProfessor(name, surname, salary, office) {
    return new Professor(name, surname, salary, office);
}

function createStudent(name, surname, indexNumber, studentStatus) {
    return new Student(name, surname, indexNumber, studentStatus);
}

function createAndAddProfessor() {
   var displayProfessors = document.querySelector(".display-professors"); 
   var professorName = document.querySelector(".professor-name-input").value; 
   var professorSurname = document.querySelector(".professor-lastName-input").value;
   var professorSalary = document.querySelector(".professor-salary-input").value;  
   var professorOfficeSelect = document.querySelector(".select-professor-office"); 
   var professorOffice = professorOfficeSelect[professorOfficeSelect.selectedIndex].value;
   
   var getProfessorOffice = getConstant(professorOffice, OFFICES);
   
   var professor = createProfessor(professorName, professorSurname, professorSalary, getProfessorOffice);

   professors.push(professor);

    makeSelect(professors, displayProfessors);
 
}

function createAndAddFaculty() {
    var facultyInput = document.querySelector(".faculty-input");
    facultyForm = document.querySelector(".faculty-form");
    var h1 = document.querySelector("h1");
    h1.textContent = facultyInput.value;
    var newFaculty = createFaculty(facultyInput.value);
    faculties.push(newFaculty); 
    console.log(faculties); 
    facultyForm.classList.add("hidden");
}

function createAndAddStudent() {
    var studentName = document.querySelector(".student-name-input").value; 
    var studentSurname = document.querySelector(".student-lastName-input").value;
    var studentIndexNumber = document.querySelector(".index-number-input").value;  
    var studentStatusSelect = document.querySelector(".select-student-status"); 
    var studentStatus = studentStatusSelect[studentStatusSelect.selectedIndex].value;
    var getStudentStatus = getConstant(studentStatus, STUDENTSTATUS);
    var student = createStudent(studentName, studentSurname, studentIndexNumber, getStudentStatus);  
}

function createAndAddExam() {
    
}

var exam = new Exam ("some big name", "dsa", "1982 2 2", 2)


