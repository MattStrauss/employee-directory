const Employee = require("../js/employee");
const Department = require("../js/department");

// default Employee test instance
let testEmployee = new Employee(
  true,
  "Jane",
  "Doe",
  "jane@example.com",
  "717-555-1212",
  new Department("Accounting")
);

test("Employee constructs with a active status, first, last name, email, phone and department", () => {
  expect(testEmployee).toEqual({
    active: true,
    firstName: "Jane",
    lastName: "Doe",
    email: "jane@example.com",
    phone: "717-555-1212",
    department: { name: "Accounting", number: 1 },
  });
});

test("getFullName returns Employee instance full name", () => {
  let testEmployee = new Employee(
    true,
    "Trisha",
    "Tester",
    "trish@example.com",
    "717-555-1212",
    new Department("Accounting")
  );
  expect(testEmployee.getFullName()).toBe("Trisha Tester");
});

test("isActive returns Employee instance active status", () => {
  expect(testEmployee.isActive()).toBe(true);
});

test("getFirstName returns Employee instance first name", () => {
  expect(testEmployee.getFirstName()).toBe("Jane");
});

test("getLastName returns Employee instance last name", () => {
  expect(testEmployee.getLastName()).toBe("Doe");
});

test("getEmail returns Employee instance email address", () => {
  expect(testEmployee.getEmail()).toBe("jane@example.com");
});

test("getPhone returns Employee instance phone number", () => {
  expect(testEmployee.getPhone()).toBe("717-555-1212");
});

test("getDepartment returns Employee instance assigned department", () => {
  expect(testEmployee.getDepartment()).toEqual(new Department("Accounting"));
});
