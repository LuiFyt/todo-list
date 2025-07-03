const express = require('express');
const app = express();
const { router: tasksRouter, tasks } = require('./routes/tasks');
const cron = require('node-cron');
const { sendReminderEmail } = require('./utils/mailer');
require('dotenv').config();

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/tasks', tasksRouter);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

app.listen(3000, () => console.log('Servidor rodando em http://localhost:3000'));

// Agenda o envio diário às 9h
cron.schedule('0 9 * * *', () => {
  console.log('⏰ Enviando alertas de tarefas pendentes...');
  const pendentes = tasks.filter(t => !t.done);
  pendentes.forEach(task => {
    sendReminderEmail(task.email, task.title, task.description);
  });
});