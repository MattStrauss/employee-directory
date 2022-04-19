const Employee = require('../js/employee');

test('Employee constructs with a first and last name', () => {
  let testEmployee = new Employee('Jane', 'Doe')
  expect(testEmployee).toEqual({firstName: 'Jane', lastName: 'Doe'});
});

test('fullName returns Employee instance full name', () => {
  let testEmployee = new Employee('Trisha', 'Tester')
  expect(testEmployee.fullName()).toBe('Trisha Tester');
});
