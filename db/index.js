const connection = require("./connection.js")

class DB{
    constructor(connection) {
        this.connection = connection
    }
    findAllEmployees(){

        return this.connection.query("SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCACT(manager.first_name, ' ', manager.last_name)AS manager FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id LEFT JOIN employee manager ON manager.id = employee.manager_id")
    }
addEmployee(employee){
    return this.connection.query("INSERT INTO employee  SET ?", employee, (err,result) => {
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
}
    

    //method


// const sql = `INSERT INTO movies (movie_name)
// VALUES (?)`;
// const params = [body.movie_name];
  
//   db.query(sql, params, (err, result) => {
//     if (err) {
//       res.status(400).json({ error: err.message });
//       return;
//     }
//     res.json({
//       message: 'success',
//       data: body
//     });
//   });
