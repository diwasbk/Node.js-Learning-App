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

// Define POST route to send emails
app.post("/api/send-email", (req, res) => {
    // Email configuration
    const mailOptions = {
        form: "youremail@gmail.com", // Sender's email address
        to: "receiver123@gmail.com", // Receiver's email address
        subject: req.body.subject, // Email subject from request body
        text: req.body.text // Email text content from request body
    }

    // Send email using transporter
    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            // If error occurs, send failure message
            res.send("Email Operation Failed! Please try again later.")
        } else {
            // If email sent successfully, send success response
            res.send({
                message: "Email sent successfully!",
                success: true
            })
        }
    })
});

// Start Express server on port 4200
app.listen(4200, () => {
    console.log("server is runnning at the port 4200.");
});
