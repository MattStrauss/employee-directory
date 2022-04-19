const Department = require('../js/department');

test('Department constructs with a name and number', () => {
  let testDepartment = new Department('Accounting', '4')
  expect(testDepartment).toEqual({name: 'Accounting', number: '4'});
});
