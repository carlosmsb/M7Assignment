// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
const form = document.getElementById('addForm');
const employeeTable = document.getElementById('employees')

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
const row = employeeTable.insertRow();
    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
const cellID = row.insertCell();
const cellName = row.insertCell();
const cellExtension = row.insertCell();
const cellEmail = row.insertCell();
const cellDepartment = row.insertCell();
const cellDelete = row.insertCell();
    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    cellID.appendChild(document.createTextNode(id));
    cellID.appendChild(document.createTextNode(name));
    cellID.appendChild(document.createTextNode(extension));
    cellID.appendChild(document.createTextNode(email));
    cellID.appendChild(document.createTextNode(department));
    // CREATE THE DELETE BUTTON

    // RESET THE FORM

    // SET FOCUS BACK TO THE ID TEXT BOX

    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE

})

// DELETE EMPLOYEE