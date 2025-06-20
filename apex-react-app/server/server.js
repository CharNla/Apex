const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const mysql = require('mysql2/promise');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// --- Database Connection ---
const dbPool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Function to initialize the database
async function initializeDatabase() {
    try {
        const connection = await dbPool.getConnection();
        console.log('Successfully connected to the database.');

        // Create journals table if it doesn't exist
        await connection.query(`
            CREATE TABLE IF NOT EXISTS journals (
                id INT AUTO_INCREMENT PRIMARY KEY,
                title VARCHAR(255) NOT NULL,
                content TEXT NOT NULL,
                author VARCHAR(255),
                createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );
        `);
        console.log('`journals` table is ready.');
        
        connection.release();
    } catch (error) {
        console.error('Error connecting to or setting up the database:', error);
        // Exit process if DB connection fails
        process.exit(1);
    }
}

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

  // Load and populate the email template
  const templatePath = path.join(__dirname, 'EmailTemplate.txt');
  fs.readFile(templatePath, 'utf8', (err, htmlTemplate) => {
    if (err) {
      console.error('Error reading email template:', err);
      return res.status(500).json({ message: 'Failed to read email template.' });
    }

    let htmlBody = htmlTemplate;
    htmlBody = htmlBody.replace('{{from_name}}', `${firstName} ${lastName}`);
    htmlBody = htmlBody.replace('{{reply_to}}', email);
    htmlBody = htmlBody.replace('{{phone}}', phone);
    htmlBody = htmlBody.replace('{{company}}', company);
    htmlBody = htmlBody.replace('{{business_type}}', businessType);
    htmlBody = htmlBody.replace('{{service_interest}}', service);
    htmlBody = htmlBody.replace('{{budget}}', budget);


    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      replyTo: email,
      subject: `[Apex Website Contact] - ${service} from ${company}`,
      html: htmlBody,
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
});

// --- Journal API Endpoints ---
app.get('/api/journals', async (req, res) => {
    try {
        const [rows] = await dbPool.query('SELECT * FROM journals ORDER BY createdAt DESC');
        res.json(rows);
    } catch (error) {
        console.error('Error fetching journals:', error);
        res.status(500).json({ message: 'Failed to fetch journals' });
    }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  initializeDatabase(); // Connect to DB when server starts
}); 