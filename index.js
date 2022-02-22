const inquire = require('inquire')
const db = require('./db')
require('console.table')
const departments = ['Finance', 'Engineering', 'Sales', 'Legal']
const roles = ['Account Manager', 'Accountant', 'Lead Engineer', 'Software Engineer', 'Sales Lead', 'Salesperson', 'Legal Team Lead', 'Lawyer']
const employees = []

function Menu() {
    inquire.prompt(
        {
            type: 'list',
            name: 'choice',
            message: 'What would you like to do?',
            choices: [
                {
                    name: 'View all employees',
                    value: "view_employees",
                },

                {
                    name: 'Add employee',
                    value: "add_employee",
                },
                {
                    name: 'View all roles',
                    value: "view_all_roles",
                },
                {
                    name: `Add role`,
                    value: "add_role",
                },
                {
                    name: 'View all departments',
                    value: "view_departments",
                },
                {
                    name: 'Add department',
                    value: "add_department",
                },
                {
                    name: 'Quit',
                    value: "quit",
                },
            ]
        }).then(choices => {
            let choices = choices.choice;

            switch (choices) {
                case "view_employees":
                    view_employees()
                    break;
                case "add_employee":
                    add_employee()
                    break;
                case "view_all_roles":
                    view_all_roles()
                    break;
                case "add_role":
                    add_role()
                    break;
                case "view_departments":
                    view_departments()
                    break;
                case "add_department":
                    add_department()
                    break;
                default:
                    quit()
                    //process.exit(0)

            }
        })
    function add_department() {
        inquire.prompt(
            {
                type: 'input',
                name: 'departmentName',
                message: 'What is the name of the department?'
            },
        ).then((results) =>{
            let results = results.departmentName
            addDepartment(results);
            departments.push(results)

        })
    };

    function add_role() {
        inquire.prompt(
            {
                type: 'input',
                name: 'roleName',
                message: 'What is the name of the role?'
            },
            {
                type: 'input',
                name: 'roleSalary',
                message: 'What is the salary?'
            },
            {
                type: 'list',
                name: 'roleDepartment',
                message: 'What department does this role belong to?',
                choices: [...departments]
            },
            {
                type: 'list',
                name: 'role'
            }
        ).then((results) =>{
            db.findAllDepartments().then()
            
        })
    }
    function add_employee() {
        inquire.prompt(
            {
                type: 'input',
                name: 'employeeFirstName',
                message: 'What is the employee first name?'
            },
            {
                type: 'input',
                name: 'employeeLastName',
                message: 'What is the employee last name?'
            },{
                type: 'list',
                name: 'employeeRole',
                message: 'What is the employee role?',
                choices: [...roles]
            },
        ).then((results) => {
        addEmployee(results.employeeFirstName);
        addEmployee(results.employeeLastName);
        addEmployee(results.employeeRole);
        employees.push(results);
        })
    };
    function view_employees() {

    };
    function view_all_roles() {

    }
    function view_departments() {
        
    }

}