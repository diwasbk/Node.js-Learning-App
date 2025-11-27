import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/company")

const userSchema = mongoose.Schema({
    username: {
        type: String,
    },
    email: {
        type: String,
        unique: true
    },
    address: {
        type: String,
    }
})

export default mongoose.model("users", userSchema)