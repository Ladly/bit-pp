// Employees and Managers

// Create constructor functions with properties representing the following:
// Employee: name, surname, specialization, salary
// Manager: name, surname, department, salary

// All employees should inherit method:
// getSpecialization which prints out the name of the specialization

// All managers should inherit methods:
// getDepartment which prints out the name of the department
// changeDepartment which sets the department value on the given value

// All employees and managers should inherit methods:
// getData which prints out the name and surname 
// getSalary which prints out the salary
// increaseSalary which increases the salary by 10% 

function Person(name, surname, salary) {
    this.name = name;
    this.surname = surname;
    this.salary = salary;
}

Person.prototype.increaseSalary = function() {
    return this.salary += (this.salary / 10);
};

Person.prototype.getSalary = function() {
    return this.salary;
};

Person.prototype.getData = function() {
    return this.name + " " + this.surname;
};

function Employee(name, surname, specialization, salary) {
    Person.call(this, name, surname, salary);
    this.specialization = specialization;
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

Employee.prototype.getSpecialization = function () {
    return this.specialization;
} ;

function Manager(name, surname, department, salary) {
    Person.call(this, name, surname, salary);
    this.department = department;
}

Manager.prototype = Object.create(Person.prototype);
Manager.prototype.constructor = Manager;


Manager.prototype.getDepartment = function() {
    return this.department;
};

Manager.prototype.changeDepartment = function(wantedDepartment) {
    this.department = wantedDepartment;
    return this.department;
};


var jelena = new Manager('Jelena', 'Milosavljevic', 'programmer', 500);
var vuk = new Employee('Vuk', 'Ivanovic', "programmer", 250 );


jelena.changeDepartment('Team leader');

console.log(jelena.getData());
console.log(vuk.getSalary());
console.log(vuk.increaseSalary());

