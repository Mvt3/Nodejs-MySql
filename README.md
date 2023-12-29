I wanted to deploy with Railway, but I found that it has certain limitations for creating tables in MySQL, so I couldn't get it to work at all:(


https://nodejs-mysql-production-598c.up.railway.app/api/employees  (live here)

Routes: 

router.get('/ping', ping);

router.get("api/employees", getEmployees);  GET ALL EMPLOYEES

router.get("api/employees/:id", getEmployee); GET 1 EMPLOYEE BY ID

router.post("api/employees", createEmployees); DONT WORK 

router.patch("api/employees/:id", updateEmployees); UPDATE ONE PARAMETER. EXAMPLE {"name":"newName", "salary":newSalary}

router.delete("api/employees/:id", deleteEmployees); DELETE 1 EMPLOYEE BY ID



Made by [![My Skills](https://skillicons.dev/icons?i=js,mysql,nodejs,express&perline=4)](https://skillicons.dev)
