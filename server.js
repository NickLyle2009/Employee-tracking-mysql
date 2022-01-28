const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();


app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: process.env.USER,
    // TODO: Add MySQL password here
    password: process.env.PASSWORD,
    database: 'employee_tracker_db'
  },
  )