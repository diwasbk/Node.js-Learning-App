import {z} from "zod"

const enrollSchema = z.object({
    username: z.string({required_err: "Username is required"}),
    email: z.string({required_err: "Email is required"}),
    address: z.string({required_err: "Address is required"})
})

export default enrollSchema
