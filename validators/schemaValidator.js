import { z } from "zod"

const enrollSchema = z.object({
    username: z.string("Username is required").min(3, "Username must be at least 3 characters."),
    email: z.string("Email is required.").email({ message: "Invalid email" }),
    address: z.string("Address is required").min(4, "Address must be at least 4 characters.")
})

export default enrollSchema
