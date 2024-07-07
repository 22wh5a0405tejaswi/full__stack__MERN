    const nodemailer = require('nodemailer');
    const User = require('../models/User');

    exports.submitForm = async (req, res) => {
    const { name, message, role } = req.body;
    const emailMessage = `
        Role: ${role}
        Name: ${name ? name : 'Anonymous'}
        Message: ${message}
    `;

    try {
        const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
        });

        const mailOptions = {
        from: process.env.EMAIL_USER,
        to: req.user.email,
        subject: `New message from ${role}`,
        text: emailMessage
        };

        await transporter.sendMail(mailOptions);
        res.send('Email sent successfully');
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).send('Error sending email');
    }
    };
