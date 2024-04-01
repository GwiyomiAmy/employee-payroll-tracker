// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

//Make employees into an empty array that will be added to with prompts
let  employees = []
// Collect employee data
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects
  //Create a loop
  while (employees) {
    //Create an object array containing First Name, Last Name, and Salary for each new employee added
   let employee = {
    firstName: "",
    lastName: "", 
    salary: 0
   }
   //Prompts to add First Name, Last Name, and Salary to current employee array index
   employee.firstName = prompt("Enter First Name:");
   employee.lastName = prompt("Enter Last Name:");
   employee.salary = prompt("Enter Salary:");
  
   //If something other than a number is inputted on the salary prompt
   if (isNaN(employee.salary)) {
    //Alert that what was inputted was not a number
    alert("Not a number");
    //Change what was input to 0
    employee.salary=0;
   }

   //Add employee info to the database
   employees.push(employee);

   //Ask to add another employee
   const addEmployee = confirm("Would you like to add another employee?");

   //Condition statement based on what was clicked on the last prompt
   //If click "ok"
   if (addEmployee) {
    //Direct to start the loop over again
    collectEmployees;
  //If click cancel
   } else {
    //Stop the loop
    break;
   }

  }

  //Employee info shows up on the table
  return employees;
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
  
  //Give sum a starting vallue of 0
  let sum = 0;
  
  //Loop through the indexes, starting at the index of 0, and as long as the undex is less than the length of the employees array continue increasing the index value by one for each loop
  for (let i = 0; i < employees.length; i++){
    //In order for these not to be added as a string value they must be converted to number value
    let convertedNum = parseInt(employees[i].salary);
    //Add the salary of the current index to the total sum of the salaries
    sum += convertedNum;
  }

  //To get the average salary, divide the sum of all the salaries by the total number of salaries in the array
  let average = sum / employees.length;

  //Put the average in the console where we can see it
  console.log(`The average salary between our ${employees.length} employee(s) is ${average}.`);
    
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee

  //Random index generator
  const randomEmployee = employees[Math.floor(Math.random() * employees.length)];
  //Let's see the first and last name of a random employee
  console.log(`Congratulations to ${randomEmployee.firstName} ${randomEmployee.lastName}, our random drawing winner! `);
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
