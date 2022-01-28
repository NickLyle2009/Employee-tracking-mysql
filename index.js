const inquire = require('inquire')
const dbFunction = require('./db/index')
 require('console.table')

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
                    name: 'Update employee role',
                    value: "update_role"
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
                case "update_role":
                    update_role()
                    break;
                case "view_all_roles":
                    view_all_roles()
                    break;
                case "view_all_roles":
                    view_all_roles()
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