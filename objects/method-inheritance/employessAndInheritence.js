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
    this.salary = salary
}

function Employee(name, surname, specialization, salary) {
    Person.call(this, name, surname, salary)
    this.specialization = specialization
}

Employee.prototype = Object.create(Person.prototype)
Employee.prototype.constructor = Manager;

Employee.prototype.getSpecialization = function () {
    return this.specialization
} 

function Manager(name, surname, department, salary) {
    Person.call(this, name, surname, salary)
    this.department = department
}

Manager.prototype = Object.create(Person.prototype)
Manager.prototype.constructor = Manager;

Manager.prototype.getDepartment = function() {
    return this.department
}

Manager.prototype.changeDepartment = function(wantedDepartment) {
    this.department = wantedDepartment
    return this.department
}


var frr = new Manager('frr', 'grr', 'dzzzz', 123)


frr.changeDepartment('lalal')

console.log(frr.getData());


console.log(frr)

