const connection = require("./connection.js")

class DB{
    constructor(connection) {
        this.connection = connection;
    }

    findAllEmployees(){
        return this.connection.promise().query(
          "SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id;"
        )
    };
    
    addEmployee(employee){
        return this.connection.promise().query("INSERT INTO employee SET ?", employee, (err,result) => {
        if (err) {
              res.status(400).json({ error: err.message });
              return;
            }
            res.json({
              message: 'success',
              data: body
            });
          } );
    };

    addRole(role){
      return this.connection.promise().query("INSERT INTO role SET ?", role, (err,result) => {
        if (err) {
              res.status(400).json({ error: err.message });
              return;
            }
            res.json({
              message: 'success',
              data: body
            });
          } );
    };
    
    addDepartment(department){
      return this.connection.promise().query("INSERT INTO department SET ?", department, (err, result) => {
      if (err) {
          res.status(400).json({ error: err.message });
          return;
        }
        res.json({
          message: 'success',
          data: body
        });
      });
  };

    findAllDepartments(){
        return this.connection.promise().query("SELECT department.id, department.name FROM department;")
    };

    findAllRoles(){
        return this.connection.promise().query("SELECT role.id, role.title, role.salary FROM role;")
    };
}
    

  module.exports = new DB(connection)


