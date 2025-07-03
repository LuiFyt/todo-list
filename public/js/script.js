document.getElementById('form').addEventListener('submit', async e => {
  e.preventDefault();
  const form = e.target;
  const data = {
    title: form.title.value,
    description: form.description.value,
    email: form.email.value
  };

  const res = await fetch('/tasks', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(data)
  });

  form.reset();
  carregarTarefas();
});

async function carregarTarefas() {
  const res = await fetch('/tasks');
  const tasks = await res.json();
  const list = document.getElementById('taskList');
  list.innerHTML = '';
  tasks.forEach(task => {
    const li = document.createElement('li');
    li.innerHTML = `${task.title} - ${task.done ? '✅' : '⏳'}
      <button onclick="concluir(${task.id})">Concluir</button>
      <button onclick="excluir(${task.id})">Excluir</button>`;
    list.appendChild(li);
  });
}

async function concluir(id) {
  await fetch(`/tasks/${id}`, { method: 'PUT' });
  carregarTarefas();
}

async function excluir(id) {
  await fetch(`/tasks/${id}`, { method: 'DELETE' });
  carregarTarefas();
}

async function enviarAlertas() {
  await fetch('/tasks/send-alerts', { method: 'POST' });
  alert("Alertas enviados para tarefas pendentes.");
}

carregarTarefas();