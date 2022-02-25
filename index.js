const inquire = require('inquirer')
const db = require('./db')
require('console.table')
const departments = ['Finance', 'Engineering', 'Sales', 'Legal']
const roles = ['Account Manager', 'Accountant', 'Lead Engineer', 'Softwarep Engineer', 'Sales Lead', 'Salesperson', 'Legal Team Lead', 'Lawyer']
const employees = []

Menu()
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
        }).then(res => {
            let choice = res.choice;

            switch (choice) {
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
            }
        })
}

function add_department() {
    inquire.prompt(
        {
            type: 'input',
            name: 'departmentName',
            message: 'What is the name of the department?'
        },
    ).then((res) =>{
        let results = res
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
    ).then((results =>{
        db.findAllDepartments().then()
        addRole(results.roleName);
        addRole(results.roleSalary);
        addRole(results.roleDepartment);
    }))
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
        }).then(res => {
            db.findAllEmployees()
              .then(([rows]) => {
                let employees = rows;
                const managerChoices = employees.map(({ id, first_name, last_name }) => ({
                  name: `${first_name} ${last_name}`,
                  value: id
                }));   
                prompt({
                    type: "list",
                    name: "managerId",
                    message: "Who is the employee's manager?",
                    choices: managerChoices
                  })
                 .then(res => {
             let employee = {
                        manager_id: res.managerId,
                        role_id: roleId,
                        first_name: firstName,
                        last_name: lastName
                      }
            db.addEmployee(employee)
            employees.push(employee); 
            });
        })
    })
 }
function view_employees() {
    db.findAllEmployees().then(([list]) => {
        let employees = list;
        console.table(employees);
      })
      .then(() => Menu());

};
function view_all_roles() {
    db.findAllRoles().then(([list]) => {
        let roles = list;
        console.table(roles);
      })
      .then(() => Menu());

};
function view_departments() {
    db.findAllDepartments().then(([list]) => {
        let departments = list;
        console.table(departments);
      })
      .then(() => Menu());

};
function quit(){
    console.log("Bye-Bye!")
process.exit()}