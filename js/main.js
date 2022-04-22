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

const addRow = function (employee, index) {

  console.log((index % 2 === 0));
  let table = document.getElementById('employeeTable').getElementsByTagName('tbody')[0];

  let row = table.insertRow(-1);
  row.innerHTML = `
                <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">${employee.getFullName()}</td>
                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">Accounting</td>
                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">${employee.getEmail()}</td>
                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">${employee.getPhone()}</td>
                <td class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                  <a href="#" class="text-amber-600 hover:text-amber-900">Edit<span class="sr-only">,  ${employee.getFullName()} </span></a>
                </td>
                `

  if (index % 2 === 0) {
    row.addClass = "bg-grey-100";
  }
}


document.addEventListener("DOMContentLoaded", function() {
  employees.forEach((employee, index) => {
    console.log({employee});
    addRow(employee, index)
  });
});



