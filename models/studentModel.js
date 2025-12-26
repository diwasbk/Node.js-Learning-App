mongoose.connect("mongodb://127.0.0.1:27017/studentdb")

import mongoose from "mongoose";
const studentSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true
    },
    phone: {
        type: Number,
        required: true
    }
})

export default mongoose.model("students", studentSchema)