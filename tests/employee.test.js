const Employee = require('../js/employee');
const Department = require("../js/department");

test('Employee constructs with a active status, first, last name, email, phone and department', () => {
  let testEmployee = new Employee(true, 'Jane', 'Doe', "jane@example.com", "717-555-1212",
    new Department("Accounting"))
  expect(testEmployee).toEqual({active: true, firstName: 'Jane', lastName: 'Doe', email: "jane@example.com",
  phone: "717-555-1212", department: { name:"Accounting", number: 1} });
});

test('fullName returns Employee instance full name', () => {
  let testEmployee = new Employee(true, 'Trisha', 'Tester', "trish@example.com", "717-555-1212",
    new Department("Accounting"))
  expect(testEmployee.getFullName()).toBe('Trisha Tester');
});
