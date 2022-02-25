const mysql = require('mysql2');
require('dotenv').config();

const db = mysql.createConnection(
    {
      host: 'localhost',
      user: process.env.USERNAME,
      password: process.env.PASSWORD,
      database: 'employee_tracker_db'
    });
    
    db.connect(function (err) {
        if (err) throw err
    });

    module.exports = db;