import { Router } from "express";
import {getEmployees, createEmployees, updateEmployees, deleteEmployees} from '../controllers/employees.controller.js';
import { getEmployee } from "../controllers/employees.controller.js";
//Modularizar rutas

const router = Router()

//End points
router.get("/employees", getEmployees);

router.get("/employees/:id", getEmployee);

router.post("/employees", createEmployees);

router.patch("/employees/:id", updateEmployees);

router.delete("/employees/:id", deleteEmployees);


export default router;