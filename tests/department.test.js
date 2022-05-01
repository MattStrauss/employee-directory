const Department = require("../js/department");

test("Department constructs with a name", () => {
  let testDepartment = new Department("Accounting");
  expect(testDepartment).toEqual({ name: "Accounting", number: 1 });
});

test("getName returns Department instance name", () => {
  let testDepartment = new Department("Engineering");
  expect(testDepartment.getName()).toBe("Engineering");
});

test("getNumber returns correct digit depending on instance name", () => {
  let testDepartment = new Department("Marketing");
  expect(testDepartment.getNumber()).toBe(2);
});

test("getNumber returns correct digit depending on instance name", () => {
  let testDepartment = new Department("Administration");
  expect(testDepartment.getNumber()).toBe(3);
});

test("getNumber returns correct digit depending on instance name", () => {
  let testDepartment = new Department("Finance");
  expect(testDepartment.getNumber()).toBe(4);
});
