export class Employee {

  constructor(firstName, lastName, email, phone) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.phone = phone;
  }

  getFullName() {
    return this.firstName + ' ' + this.lastName
  }

  getEmail() {
    return this.email;
  }

  getPhone() {
    return this.phone;
  }

}
