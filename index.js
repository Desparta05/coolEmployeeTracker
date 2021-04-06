require(`dotenv`).config();
const consoleTable = require(`console.table`);
const inquirer = require(`inquirer`);
const mysql = require(`mysql2`);
const questions = require(`./questions`);
const functions = require(`./functions`);

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

connection.connect((err) => {
    if (err) throw err;
    runApp()
});

const runApp = () => {
    console.log(`Welcome to the Employee Tracker!`);
    inquirer.prompt(questions.menuChoices).then(response => {
        switch (response.menuChoice) {
            case `View all employees`:
                functions.getEmployees();
                break;
            case `View departments`:
                functions.viewDepartments()
                break;
            case `View all employees by department`:
                functions.getEmployeesDepartment()
                break;
            case `Add employee`:
                functions.addEmployee();
                break;
            case `Remove employee`:
                functions.removeEmployee();
                break;
            case `Update employee title`:
                functions.updateEmployeeTitle();
                break;
            case `Update employee salary`:
                functions.updateEmployeeSalary();
                break;
            case `Exit`:
                functions.exit();
                break;
        };
    });
};