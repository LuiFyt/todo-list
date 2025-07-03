const express = require('express');
const router = express.Router();
let tasks = [];

const { sendReminderEmail } = require('../utils/mailer');

router.post('/', (req, res) => {
  const { title, description, email } = req.body;
  const task = { id: Date.now(), title, description, done: false, email };
  tasks.push(task);
  res.json(task);
});

router.get('/', (req, res) => {
  res.json(tasks);
});

router.put('/:id', (req, res) => {
  const task = tasks.find(t => t.id == req.params.id);
  if (!task) return res.status(404).json({ error: 'Tarefa não encontrada' });
  task.done = true;
  res.json(task);
});

router.delete('/:id', (req, res) => {
  const index = tasks.findIndex(t => t.id == req.params.id);
  if (index !== -1) tasks.splice(index, 1);
  res.sendStatus(200);
});

router.post('/send-alerts', (req, res) => {
  const pendentes = tasks.filter(t => !t.done);
  pendentes.forEach(task => {
    sendReminderEmail(task.email, task.title, task.description);
  });
  res.send('Emails enviados');
});

module.exports = { router, tasks };