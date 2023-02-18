import express from 'express'
import { getEmployees } from '../Controllers/Employees/getEmployees.js'
import { getEmployeesCheck } from '../Controllers/Employees/getEmployeesCheck.js'
import { updateStateEmployees } from '../Controllers/Employees/updateStatesEmployees.js'
import { deletedEmployees } from '../Controllers/Employees/deletedEmployees.js'
import { addEmployees } from '../Controllers/Employees/addEmployees.js'
import { addTicket } from '../Controllers/Ticket/addTicket.js'
import { getCargo } from '../Controllers/getCargo.js'
import { getEstadoTicket } from '../Controllers/getEstadoTicket.js'
import { getTickets } from '../Controllers/Ticket/getTicket.js'
import { updateStateTicket } from '../Controllers/Ticket/updateStateTicket.js'
import { signin } from '../Controllers/Login/signin.js'
import { updateEmployees } from '../Controllers/Employees/updateEmployees.js'
import bodyParser from 'body-parser';

const router = express.Router();
const jsonParse = bodyParser.json()

router.post("/addEmployees", jsonParse , addEmployees)
router.post("/updateStateEmployees" ,jsonParse , updateStateEmployees)
router.post("/updateEmployees" ,jsonParse , updateEmployees)
router.post("/deletedEmployees" ,jsonParse , deletedEmployees)
router.get("/viewEmployees", getEmployees)
router.get("/viewEmployeescheck", getEmployeesCheck)



router.post("/addTicket", jsonParse , addTicket)
router.get("/viewTicket", getTickets);
router.post("/updateStateTicket" ,jsonParse ,  updateStateTicket)


router.get("/getCargo", getCargo)
router.get("/getEstadoTicket", getEstadoTicket)

router.post("/signin", jsonParse, signin)



export default router