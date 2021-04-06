const mainMenu = [
    'ADD DEPARTMENT', 
    'ADD ROLE', 
    'ADD EMPLOYEE', 
    'ADD MANAGER', 
    'VIEW DEPARTMENT', 
    'VIEW ROLE', 
    'VIEW EMPLOYEE', 
    'VIEW MANAGER',
    'UPDATE EMPLOYEE ROLE',
    `Exit APPLICATION`
];

const departments = [`Engineering`, `Project Management`, `Supply Chain Management`, `Operations`, `Quality`];

const questions = {
    menuChoices: [
        {
            type: `list`,
            name: `menuChoice`,
            message: `Select one of the following options:`,
            choices: mainMenu
        }
    ],

    employeeQuestions: [
        {
            type: `input`,
            name: `firstName`,
            message: `What is the employee's first name?`
        },
        {
            type: `input`,
            name: `lastName`,
            message: `What is the employee's last name?`
        },
        {
            type: `list`,
            name: `department`,
            message: `What department will they work in?`,
            choices: departments
        },
        {
            type: `input`,
            name: `title`,
            message: `What is the employee's title?`
        },
        {
            type: `number`,
            name: `salary`,
            message: `Input the employee's salary (numbers only)`
        },
        {
            type: `list`,
            name: `hasManager`,
            message: `Does the employee report to a manager?`,
            choices: [`Yes`, `No`]
        },
    ],
};

module.exports = questions;