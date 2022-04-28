const Department = require('../js/department');

test('Department constructs with a name', () => {
  let testDepartment = new Department('Accounting')
  expect(testDepartment).toEqual({name: 'Accounting', number: 1});
});
