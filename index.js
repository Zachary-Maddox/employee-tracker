const inquirer = require("inquirer");

const mysql = require("mysql2");

const cTable = require('console.table');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'employee_db',
  password: 'root'
});

var updateAEmployee = ()=>{
  inquirer
    .prompt([{
      name:"updateEmployee",
      message:"What Employee would you like to update?",
      type: "input",
    }])
    .then((answers) => {
      },
    firstQuestion()
    )}

var addAEmployee = ()=>{
  inquirer
    .prompt([{
      name:"whatEmployee",
      message:"What Employee would you like to add?",
      type: "input",
    }])
    .then((answers) => {
      },
    firstQuestion()
    )}

var addARole = ()=>{
  inquirer
    .prompt([{
      name:"whatRole",
      message:"What Role would you like to add?",
      type: "input",
    }])
    .then((answers) => {
      },
    firstQuestion()
    )}



var addADept = ()=>{
  inquirer
    .prompt([{
      name:"whatDept",
      message:"What department would you like to add?",
      type: "input",
    }])
    .then((answers) => {
      },
    firstQuestion()
    )}


var viewAllEmployees = ()=>{
  connection.query(
    'SELECT * FROM employee',
    function(err, results, fields) {
      console.table(results);
      firstQuestion();
    }
  );
}
var viewAllRoles = ()=>{
  connection.query(
    'SELECT * FROM role',
    function(err, results, fields) {
      console.table(results);
      firstQuestion();
    }
  );
}


var viewAllDept = ()=>{
  connection.query(
    'SELECT * FROM department',
    function(err, results, fields) {
      console.table(results);
      firstQuestion();
    }
  );
}


var firstQuestion = ()=>{
  inquirer
  .prompt([{
    name:"userChoice",
    message:"What would you like to do?",
    type: "list",
    choices:["View all Departments","View all Roles","View all Employees","Add a Department","Add a Role","Add a Employee","update a Employee"]
  }
  ])
  .then((answers) => {
    switch(answers.userChoice){
      case "View all Departments":
viewAllDept();
      break;
      case "View all Roles":
      viewAllRoles();
      break;
      case "View all Employees":
      viewAllEmployees();
      break;
      case "Add a Department":
      addADept();
      break;
      case "Add a Role":
      addARole();
      break;
      case "Add a Employee":
        addAEmployee();
        break;
        case "update a Employee":
          addAEmployee();
          break;
  
    }
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      console.log(error)
    }
  });
}

firstQuestion();