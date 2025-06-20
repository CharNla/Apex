const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

transporter.verify((error, success) => {
    if (error) {
        console.log('Error verifying transporter:', error);
    } else {
        console.log('Server is ready to take our messages');
    }
});

app.post('/api/send-email', (req, res) => {
  const { firstName, lastName, email, phone, company, businessType, service, budget } = req.body;

  if (!firstName || !lastName || !email || !phone || !company || !businessType || !service || !budget) {
    return res.status(400).json({ message: 'Please fill out all fields.' });
  }

  const mailOptions = {
    from: process.env.EMAIL_USER, /* email from .env */
    to: process.env.EMAIL_TO, /* email to .env */
    replyTo: email,
    subject: `[Apex Website Contact] - ${service} from ${company}`,
    html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Business Type:</strong> ${businessType}</p>
        <p><strong>Service of Interest:</strong> ${service}</p>
        <p><strong>Budget:</strong> ${budget}</p>
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ message: 'Failed to send email.', error: error.toString() });
    }
    console.log('Email sent: ' + info.response);
    res.status(200).json({ message: 'Email sent successfully!' });
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
}); 