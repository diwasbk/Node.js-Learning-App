import express from "express"
import StudentController from "../controllers/studentController"

const studentRouter = express.Router()
const studentController = new StudentController

studentRouter.post("/enroll", studentController.enrollStudent)

export default studentRouter;