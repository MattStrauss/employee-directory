import {Employee} from './employee';
import {Department} from './department';

const employees = [
new Employee("Tim", "Berners-Lee", "tim@w3c.org", "814-555-1243"),
new Employee("Ada", "Lovelace", "ada@w3c.org", "814-555-1244"),
new Employee("Alan", "Turing", "alan@w3c.org", "814-555-1245"),
new Employee("Barbara", "Liskov", "barbara@w3c.org", "814-555-1246"),
new Employee("John", "von Neumann", "john@w3c.org", "814-555-1247"),
new Employee("Edsger", "Dijkstra", "edsger@w3c.org", "814-555-1248"),
new Employee("Donald", "Knuth", "donald@w3c.org", "814-555-1249"),
];


const departments = [
new Department("Accounting", 1),
new Department("Marketing", 1),
new Department("Administration", 1),
new Department("Finance", 1),
]

let modalMode = "add";
let modalEditedEmployeeIndex = -1

const addRow = function (employee, index) {

  let table = document.getElementById('employeeTable').getElementsByTagName('tbody')[0];

  let row = table.insertRow(index);
  row.innerHTML = `
                <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">${employee.getFullName()}</td>
                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">Accounting</td>
                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">${employee.getEmail()}</td>
                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">${employee.getPhone()}</td>
                <td class="editButton relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                  <a href="#" class="text-amber-600 hover:text-amber-900">Edit<span class="sr-only">,  ${employee.getFullName()} </span></a>
                </td>
                `

  if (index % 2 !== 0) {
    row.classList = "bg-gray-100";
  }
}

document.addEventListener("DOMContentLoaded", function() {

  employees.forEach((employee, index) => {
    addRow(employee, index);
  });

  departments.forEach((department) => {
    document.getElementById('department').add(new Option(department.getName()));
  });

  const editButtons = document.querySelectorAll(".editButton");

  editButtons.forEach((btn, index) => {
    btn.addEventListener("click", (e) => {
      loadModalForEdit(employees[index], index);
      modalMode = "edit";
      modalEditedEmployeeIndex = index;
      toggleModal();
    });
  });

});


const toggleModal = function () {
  let modal = document.getElementById('employeeModal');
  if (modal.classList.contains("hidden")) {
    modal.classList.remove("hidden");
  } else {
    modal.classList.add("hidden");
  }
}

const clearModal = function () {
  document.getElementById("firstName").value = "";
  document.getElementById("lastName").value = "";
  document.getElementById("department").selectedIndex = 0;
  document.getElementById("email").value = "";
  document.getElementById("phone").value = "";
}

const loadModalForEdit = function (employee, index) {
  document.getElementById("firstName").value = employee.getFirstName();
  document.getElementById("lastName").value = employee.getLastName();
  document.getElementById("department").selectedIndex = 0;
  document.getElementById("email").value = employee.getEmail();
  document.getElementById("phone").value = employee.getPhone();
}


document.getElementById('addEmployeeButton').onclick = function showEmployeeModal() {
  toggleModal();
}

document.getElementById('closeEmployeeModalButton').onclick = function hideEmployeeModal() {
  toggleModal();
  clearModal();
}

document.getElementById('saveEmployeeButton').onclick = function saveEmployeeInfo() {

  let newEmployee = new Employee(document.getElementById("firstName").value,
    document.getElementById("lastName").value,
    document.getElementById("email").value,
    document.getElementById("phone").value)

  if (modalMode === "edit") {
    document.getElementById("employeeTable").deleteRow(modalEditedEmployeeIndex + 1);
  }

  addRow(newEmployee, modalEditedEmployeeIndex);


  clearModal();
  toggleModal();
}


