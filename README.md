# Employee-tracking-mysql
content manager system, command line to manage company database


Pseudocode for Homework 12

1) Start the Github repository
2) Make sure you have a .gitignore set to Node when you create the Github Repository
3) Let's start by creating a package.json and downloading all the libraries you need = (Mysql2, Inquirer, console.table) [If you WANT to add express, go for it];
4) Why not make a db folder and follow the instructions on the readme for the table columns?
    4a) Following the table diagram (database schema), make sure you set up the foreign key and REFERENCES during the table setup. 
    4b) For example, the department ID should connect to the role table's department_id column. 
    4c) MUST SET THIS UP IN THE BEGINNING OR ELSE YOU WILL HAVE TO DROP YOUR TABLE AND REDO IT
5) Let's make a seeds.sql file and make some test data/dummy data. => INSERT INTO
6) query.sql files (that will hold all of your queries) => Use it as a practice ground to write your SQL syntax and then paste it to mysql so you know it works. 
7) We create our server.js file and link all of the parts needed. 
8) When we use the inquirer.prompt(), we could also use the .then() to access the answers from the users. 
    8a) HOW CAN WE grab that answer and put it INTO the database? 
    8b) HINT: It's in the mysql2 documentation. 
    8c) just getting the data, posting the data, updating or deleting the data, they must all first ACCESS the database right? How can we do that? What is the METHOD called?
9) IN THE VIDEO, you'll notice that the choices are selectable, use the CHOICES method with inquirer for that.