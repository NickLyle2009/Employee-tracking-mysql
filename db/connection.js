const mysql = require('mysql2');

const db = mysql.createConnection(
    {
      host: 'localhost',
      user: process.env.USER,
      password: process.env.PASSWORD,
      database: 'employee_tracker_db'
    });
    
    db.connect(function (err) {
        if (err) throw err
    });

    module.exports = db;