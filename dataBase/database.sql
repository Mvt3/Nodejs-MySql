CREATE DATABASE IF NOT EXISTS company;

USE company;

CREATE TABLE employee(
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) DEFAULT NULL,
    salary INT(5) DEFAULT NULL,
    PRIMARY KEY (id)
);


DESCRIBE employee;

INSERT INTO employee VALUES 
    (1, 'Mauro', 1000),
    (2, 'Miguel', 2000),
    (3, 'Wena', 1250),
    (4, 'Yapo', 5000);
    