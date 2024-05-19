const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());

app.post('/send-email', (req, res) => {
    const { name, phone, cpr } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'hamzasaeed4689@gmail.com',
            pass: 'ntpy aeyy gokr nuqk'
        }
    });

    const mailOptions = {
        from: 'sameerali406046@gmail.com',
        to: 'hamzasaeed4689@gmail.com',
        subject: 'Job Application',
        text: `Name: ${name}\nPhone: ${phone}\nCPR Number: ${cpr}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send('Error sending email');
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).send('Email sent successfully');
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
