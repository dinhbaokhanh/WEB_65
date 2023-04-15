import express from "express"; 
import studentsController from "../controllers/student.js";
const routerStudents = express.Router();

routerStudents.get('', studentsController.get);
routerStudents.post('', studentsController.insert);
routerStudents.put('/:id', studentsController.updateOne);
routerStudents.put('', studentsController.updateMany)

export default routerStudents;