const express = require('express');
const nodemailer = require('nodemailer');

const app = express();

app.get('/', (req, res) => {
 
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'user@gmail.com',
      pass: 'password'
    }
  });

  const mailOptions = {
    from: 'user@gmail.com',
    to: 'user@gmail.com',
    subject: 'Email sent using Nodemailer',
    text: 'This is a email sent using Nodemailer.'
  };

  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent successfully')
      res.send('Email sent successfully');
    }
  });
});


const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
