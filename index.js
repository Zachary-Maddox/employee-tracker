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
  connection.query(
    'SELECT * FROM employee WHERE `first_name` = ? and `last_name` = ? and `role_id` = ? and `manager_id` =? ',
    ["", "", "", ""],
    function(err, results) {
      console.table(results);
      firstQuestion();
    }
  );
  }

var addAEmployee = ()=>{
  connection.query(
    'SELECT * FROM employee WHERE `first_name` = ? and `last_name` = ? and `role_id` = ? and `manager_id` =? ',
    ["", "", "", ""],
    function(err, results) {
      console.table(results);
      firstQuestion();
    }
  );
  }

var addARole = ()=>{
  connection.query(
    'SELECT * FROM role WHERE `title` = ? and `salary` = ? and `department_id` = ?',
    ["","",""],
    function(err, results) {
      console.table(results);
      firstQuestion();
    }
  );
  }



var addADept = ()=>{
  connection.query(
    'SELECT * FROM department WHERE `name` = ?',
    [''],
    function(err, results) {
      console.table(results);
      firstQuestion();
    }
  );
  }

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
    
    } else {
      console.log(error)
    }
  });
}

firstQuestion();