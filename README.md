Queria hacer un despliegue con Railway, pero me encontré que tiene ciertas limitaciones para poder crear tablas en Mysql, por lo que no pude hacerlo funcionar :(


https://nodejs-mysql-production-598c.up.railway.app/api/employees  (live here)

Routes: 

router.get('/ping', ping);

router.get("api/employees", getEmployees);  GET ALL EMPLOYEES

router.get("api/employees/:id", getEmployee); GET 1 EMPLOYEE BY ID

router.post("api/employees", createEmployees); DONT WORK 

router.patch("api/employees/:id", updateEmployees); UPDATE ONE PARAMETER EXAMPLE {"name":"newName", "salary":newSalary}

router.delete("api/employees/:id", deleteEmployees); DELETE 1 EMPLYEE BY ID

Made by [![My Skills](https://skillicons.dev/icons?i=js,mysql,nodejs,express&perline=4)](https://skillicons.dev)
