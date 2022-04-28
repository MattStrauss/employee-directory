const Department = require('./department');

class Employee {

  constructor(active, firstName, lastName, email, phone, department) {
    this.active = active;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.phone = phone;
    this.department = department;
  }

  getFullName() {
    return this.firstName + ' ' + this.lastName;
  }

  isActive() {
    return this.active;
  }

  getFirstName() {
    return this.firstName;
  }

  getLastName() {
    return this.lastName;
  }

  getEmail() {
    return this.email;
  }

  getPhone() {
    return this.phone;
  }

  getDepartment() {
    return this.department;
  }

}

module.exports = Employee;
