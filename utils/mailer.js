const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_FROM,
    pass: process.env.EMAIL_PASS,
  },
});

function sendReminderEmail(to, title, description) {
  const mailOptions = {
    from: process.env.EMAIL_FROM,
    to,
    subject: `Tarefa pendente: ${title}`,
    text: `Você ainda não completou: "${title}"\n\nDescrição: ${description}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) console.error(error);
    else console.log('Email enviado:', info.response);
  });
}

module.exports = { sendReminderEmail };