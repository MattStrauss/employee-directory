import {Employee} from './employee';
import {Department} from './department';

/**
 * Main App Data
 */
const departments = [
  new Department("Accounting"),
  new Department("Marketing"),
  new Department("Administration"),
  new Department("Finance"),
]

const employees = [
new Employee(true, "Tim", "Berners-Lee", "tim@w3c.org", "814-555-1243",
  departments[0]),
new Employee(true, "Ada", "Lovelace", "ada@w3c.org", "814-555-1244",
  departments[2]),
new Employee(true, "Alan", "Turing", "alan@w3c.org", "814-555-1245",
  departments[0]),
new Employee(true, "Barbara", "Liskov", "barbara@w3c.org", "814-555-1246",
  departments[3]),
new Employee(true, "John", "von Neumann", "john@w3c.org", "814-555-1247",
  departments[1]),
new Employee(true, "Edsger", "Dijkstra", "edsger@w3c.org", "814-555-1248",
  departments[3]),
new Employee(true, "Donald", "Knuth", "donald@w3c.org", "814-555-1249",
  departments[2]),
];

/**
 * Global Vars
 */

let modalMode = "add";
let modalEditedEmployeeIndex = -1
let modalEmployeeActiveState = false;


/**
 * Functions
 */


/**
 * Used to insert rows into the Employee Table
 * @param employee
 * @param index
 */
const addRow = function (employee, index) {

  let table = document.getElementById('employeeTable').getElementsByTagName('tbody')[0];

  let row = table.insertRow(index);
  row.innerHTML = `
                <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                  <svg class="w-6 h-6 text-amber-500 ${employee.isActive() ? '' : 'hidden'}" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                  <svg class="w-6 h-6 text-red-500 ${employee.isActive() ? 'hidden' : ''}" " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"></path></svg>
                </td>
                <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">${employee.getFullName()}</td>
                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">${employee.getDepartment().getName()}</td>
                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">${employee.getEmail()}</td>
                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">${employee.getPhone()}</td>
                <td class="editButton relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                  <a href="#" class="text-amber-600 hover:text-amber-900">Edit<span class="sr-only">,  ${employee.getFullName()} </span></a>
                </td>
                `
  // color bg of every other row to make UI a little nicer
  if (index % 2 !== 0) {
    row.classList = "bg-gray-100";
  }
}


/**
 * When the page loads, we need to build up the employee table since it's dynamic
 */
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

/**
 * Opens and closes the employee add/edit modal
 * Also sets the base look of the modal based on
 * context of employee
 */
const toggleModal = function () {

  let modal = document.getElementById('employeeModal');
  if (modal.classList.contains("hidden")) {

    modal.classList.remove("hidden");

    if (modalMode === 'edit') {
      document.getElementById('editHeading').classList.remove("hidden");
      document.getElementById('editIcon').classList.remove("hidden");
      document.getElementById('addHeading').classList.add("hidden");
      document.getElementById('addIcon').classList.add("hidden");

      if (employees[modalEditedEmployeeIndex].isActive()) {
        document.getElementById('activeButton').classList.remove("bg-gray-200");
        document.getElementById('activeButton').classList.add("bg-amber-600");
        document.getElementById('activeSlider').classList.remove("translate-x-0");
        document.getElementById('activeSlider').classList.add("translate-x-5");
        modalEmployeeActiveState = true;
        document.getElementById("activeTextDisplay").innerText = "Active";
      }

    } else {
      document.getElementById('editHeading').classList.add("hidden");
      document.getElementById('editIcon').classList.add("hidden");
      document.getElementById('addHeading').classList.remove("hidden");
      document.getElementById('addIcon').classList.remove("hidden");
      document.getElementById('activeButton').classList.remove("bg-amber-600");
      document.getElementById('activeButton').classList.add("bg-gray-200");
      document.getElementById('activeSlider').classList.remove("translate-x-5");
      document.getElementById('activeSlider').classList.add("translate-x-0");
      modalEmployeeActiveState = false;
      document.getElementById("activeTextDisplay").innerText = "Inactive";
    }

  } else {
    modal.classList.add("hidden");
  }
}

/**
 * This function handles the "active" slider/button on the employee form
 */
document.getElementById('activeButton').onclick  = function () {

  let activeButton = document.getElementById('activeButton');
  let activeSlider = document.getElementById('activeSlider');

  if (activeButton.classList.contains("bg-amber-600") || activeSlider.classList.contains("translate-x-5")) {
    activeButton.classList.remove("bg-amber-600");
    activeButton.classList.add("bg-gray-200");
    activeSlider.classList.remove("translate-x-5");
    activeSlider.classList.add("translate-x-0");
    modalEmployeeActiveState = false;
    document.getElementById("activeTextDisplay").innerText = "Inactive";
  } else {
    activeButton.classList.remove("bg-gray-200");
    activeButton.classList.add("bg-amber-600");
    activeSlider.classList.remove("translate-x-0");
    activeSlider.classList.add("translate-x-5");
    modalEmployeeActiveState = true;
    document.getElementById("activeTextDisplay").innerText = "Active";
  }
}


/**
 * Clear the modal's state for the next time it opens
 */
const clearModal = function () {
  document.getElementById("firstName").value = "";
  document.getElementById("lastName").value = "";
  document.getElementById("department").selectedIndex = 0;
  document.getElementById("email").value = "";
  document.getElementById("phone").value = "";

  modalMode = "add";
  modalEditedEmployeeIndex = -1;
}


/**
 * Set the modal's state to edit the given employee parameter
 * @param employee
 */
const loadModalForEdit = function (employee) {
  document.getElementById("firstName").value = employee.getFirstName();
  document.getElementById("lastName").value = employee.getLastName();
  document.getElementById("department").selectedIndex = employee.getDepartment().getNumber();
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

/**
 * Save employee details after adding/editing
 * (we're not actually persisting the data anywhere
 * like a db or local storage, so on refresh updates will be gone)
 */
document.getElementById('saveEmployeeButton').onclick = function saveEmployeeInfo() {

  let newEmployee = new Employee(modalEmployeeActiveState,
    document.getElementById("firstName").value,
    document.getElementById("lastName").value,
    document.getElementById("email").value,
    document.getElementById("phone").value,
    new Department(document.getElementById("department").value))

  // we delete the original row first, then add the new one below if editing
  if (modalMode === "edit") {
    document.getElementById("employeeTable").deleteRow(modalEditedEmployeeIndex + 1);
  }

  addRow(newEmployee, modalEditedEmployeeIndex);

  clearModal();
  toggleModal();
}


