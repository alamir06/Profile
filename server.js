// server.js
import express from 'express';
import nodemailer from 'nodemailer';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();  // This loads the environment variables from the .env file



const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(cors({ origin: '*' }));

app.use(bodyParser.json());

// Create a nodemailer transporter using your email service (e.g., Gmail)
const transporter = nodemailer.createTransport({
  service: 'gmail', // or use another email provider
  auth: {
    user: process.env.EMAIL, // Your email
    pass: process.env.EMAIL_PASSWORD, // Your email password or an app-specific password
  },
});
// console.log(process.env.EMAIL);
// console.log(process.env.EMAIL_PASSWORD);
// console.log(process.env.RECEIVER_EMAIL);

// API route to send email
app.post('/send-email', (req, res) => {
 
  const { firstName, lastName,email,phone ,message } = req.body;
  // Email options
  const mailOptions = {
    from: email, // sender's email
    to: process.env.RECEIVER_EMAIL, // receiver's email (your email address)
    subject: `Message from ${firstName} - Portfolio Contact Form`,
    text: `You have received a new message from ${firstName} ${lastName} ${phone} (${email}):\n\n${message}`,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send({ message: 'Error sending email' });
    }
    res.status(200).send({ message: 'Email sent successfully' });
  });
});
import winston from 'winston';

const logger = winston.createLogger({
  level: 'info',
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'server.log' })
  ]
});

logger.info('Server started');
logger.error('Error sending email');

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
