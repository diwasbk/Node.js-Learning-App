import studentModel from "../models/studentModel.js";

class StudentController {
    // Enroll Students
    enrollStudent = async (req, res) => {
        try {
            const studentExist = await studentModel.findOne({ email: req.body.email })

            if (studentExist) {
                return res.status(403).send({
                    message: "Student with this email already exists!",
                    success: false
                })
            }

            const enrollStudent = await studentModel.create({
                name: req.body.name,
                email: req.body.email,
                phone: req.body.phone
            })

            res.status(201).send({
                message: "Student enrolled successfully!",
                result: enrollStudent,
                success: true
            })

        } catch (err) {
            console.log(err),
            res.status(500).send({
                message: err.message ? `Internal server error: ${err.message}` : "Internal server error.",
                success: false
            })
        }
    }
}

export default StudentController;