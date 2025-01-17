const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();
const port = 5000;
app.use(cors());

app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  service: 'gmail', // Use Gmail's SMTP service
  auth: {
    user: 'akliluarse@gmail.com', // Your email address
    pass: 'aklilu@gmail',     // Your Gmail App Password if you use 2FA
  },
});


transporter.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }
  const mailOptions = {
    from: email,                  // Sender address (contact form email)
    to: 'alamirew.wagaw@gmail.com',   // Receiver address (where you want to receive emails)
    subject: `Contact Form: ${name}`, // Subject line
    text: `You have received a new message from ${name} (${email}):\n\n${message}`, // Plain text body
    html: `<p>You have received a new message from <strong>${name}</strong> (${email}):</p><p>${message}</p>`, // HTML body
  };



  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ error: 'Failed to send email' });
    }
    console.log('Email sent:', info.response);
    res.status(200).json({ success: 'Email sent successfully' });
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});