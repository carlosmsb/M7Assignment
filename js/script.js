// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
const form = document.getElementById('addForm');
const employeesTable = document.getElementById('employees')

// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
let employeeCount = 0;
const countOutput = document.querySelector('#empCount');

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault()
    // GET THE VALUES FROM THE TEXT BOXES
const id = document.querySelector('#id').value;
const name = document.querySelector('#name').value
const extension = document.querySelector('#extension').value
const email = document.querySelector('#email').value
const department = document.querySelector('#department').value
    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
const row = employeesTable.insertRow();
    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
const cellID = row.insertCell();
const cellName = row.insertCell();
const cellExtension = row.insertCell();
const cellEmail = row.insertCell();
const cellDepartment = row.insertCell();
const cellDelete = row.insertCell();
    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    cellID.appendChild(document.createTextNode(id));
    cellName.appendChild(document.createTextNode(name));
    cellExtension.appendChild(document.createTextNode(extension));
    cellEmail.appendChild(document.createTextNode(email));
    cellDepartment.appendChild(document.createTextNode(department));
    // CREATE THE DELETE BUTTON
const deleteButton = document.createElement('button');
    deleteButton.className = 'btn btn-danger btn-sm delete';
    deleteButton.appendChild(document.createTextNode('X'));
    cellDelete.appendChild(deleteButton);
    // RESET THE FORM
form.reset();
    // SET FOCUS BACK TO THE ID TEXT BOX
document.querySelector('#id').focus();
    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
employeeCount++;
countOutput.textContent = employeeCount;
});

// DELETE EMPLOYEE
employeesTable.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete')) {
        if (confirm('Are you sure you want to delte this employee?')) {
            const row = e.target.closest('tr');
            employeesTable.deleteRow(row.rowIndex);
            employeeCount--;
            countOutput.textContent = employeeCount;
        }
    }
})