import express from "express"; 
import nodemailer from "nodemailer";

const app = express();
app.use(express.json());

// Create a transporter object using Gmail service
const transporter = nodemailer.createTransport({
    service: "gmail", // Using Gmail as the email service
    auth: {
        user: "youremail@gmail.com", // Your Gmail address
        pass: "your-app-password" // App-specific password for Gmail
    }
});

// Define POST route to send emails with dynamic name and receiver
app.post("/api/send-email/:name/:receiver", (req, res) => {
    // Email configuration with dynamic parameters and HTML content
    const mailOptions = {
        form: "youremail@gmail.com", // Sender's email address
        to: req.params.receiver, // Receiver's email address from URL parameter
        subject: req.body.subject, // Email subject from request body
        html: `<span style="padding: 20px;">
                <b>Hello ${req.params.name},</b> <!-- Personalized greeting -->
                <br>
                <i>${req.body.html}</i> <!-- Email content from request body -->
            </span>`
    }

    // Send email using transporter
    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            // If error occurs, send failure message
            res.send("Email Operation Failed! Please try again later.")
        } else {
            // If email sent successfully, send success response
            res.send({
                message: `Email sent successfully to ${mailOptions.to}`,
                success: true
            })
        }
    })
});

// Start Express server on port 4200
app.listen(4200, () => {
    console.log("server is runnning at the port 4200.");
});
