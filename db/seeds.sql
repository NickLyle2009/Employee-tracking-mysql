INSERT INTO department (id, name)
VALUES  (001, "Finance"),
        (002, "Engineering"),
        (003, "Sales"),
        (004, "Legal"),

INSERT INTO role (id, title, salary, dept_id)
VALUES  (01, "Account Manager", 160000, 001)
        (02, "Accountant", 125000, 001)
        (03, "Lead Engineer", 15000, 002)
        (04, "Software Engineer", 120000, 002)
        (05, "Sales Lead", 100000, 003)
        (06, "Salesperson", 80000, 003)
        (07, "Legal Team Lead", 250000, 004)
        (08, "Lawyer", 19000, 004)

INSERT INTO employee (employee_id, first_name, role_id manager_id)
VALUES  (1,"John", "Doe", 01, 1)
        (2, "Mike", "Chan", 02, 1)
        (3, "Ashley", "Rodriguez", 03, 3)
        (4, "Kevin", "Tupik", 04, 3)
        (5, "Kunal", "Singh", 05, 5)
        (6, "Marlia", "Brown", 06, 5)
        (7, "Sarah", "Lourd", 07, 7)
        (8, "Tom", "Allen", 08, 7)