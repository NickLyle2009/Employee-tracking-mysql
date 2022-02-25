USE employee_tracker_db;

INSERT INTO department 
        (name)
VALUES  ("Finance"),
        ("Engineering"),
        ("Sales"),
        ("Legal");

INSERT INTO role (title, salary, department_id)
VALUES  ("Account Manager", 160000, 1),
        ("Accountant", 125000, 1),
        ("Lead Engineer", 15000, 2),
        ("Software Engineer", 120000, 2),
        ("Sales Lead", 100000, 3),
        ("Salesperson", 80000, 3),
        ("Legal Team Lead", 250000, 4),
        ("Lawyer", 19000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  ("John", "Doe", 1, 1),
        ("Mike", "Chan", 2, NULL),
        ("Ashley", "Rodriguez", 3, 3),
        ("Kevin", "Tupik", 4, NULL),
        ("Kunal", "Singh", 5, 5),
        ("Marlia", "Brown", 6, NULL),
        ("Sarah", "Lourd", 7, 7),
        ("Tom", "Allen", 8, NULL);