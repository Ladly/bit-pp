function Person(name, surname) {
    this.name = name;
    this.surname = surname;
    this.id = Math.random();
}

Person.prototype.getPersonalData = function() {
    return this.name + " " + this.surname;
};

function Employee(name, surname, salary) {
    Person.apply(this, [name, surname]);
    this.salary = salary;
    this.employeeId = Math.random();
}

function Professor(name, surname, salary, officeNumber) {
    Employee.apply(this, [name, surname, salary]);
    this.officeNumber = officeNumber;
}

Professor.prototype = Object.create(Person.prototype);
Professor.prototype.constructor = Professor;

Professor.prototype.getProfessorData = function() {
        
    return this.name + " " + this.surname;
};

function Faculty(name){
    this.name = name;
    this.professorsList = [];
}

function Student(name, surname, indexNumber, studentStatus) {
    Person.apply(this, [name, surname]);
    this.indexNumber = indexNumber;
    this.studentStatus = studentStatus;
    this.examsPassed = [];
}

Student.prototype.addExam = function(exam) {
    this.examsPassed.push(exam);
};

function Exam(subject, professor, date, grade) {
    this.subject = subject;
    this.professor = professor;
    this.date = new Date(date);
    this.grade = grade;
}

Exam.prototype.getFirstConsonant = function() {
    var firstConsonant = "";
    firstConsonant += this.subject.charAt(0);
    return firstConsonant;
};

Exam.prototype.getDate =  function() {
    var da_li_sam_zavrsio = "nisam"; /* TODO */
};

Exam.prototype.getExamData = function() {

};
