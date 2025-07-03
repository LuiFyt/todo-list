# TODO-LIST Web App

Sistema web simples para gerenciar tarefas (TODO-LIST), com funcionalidades para adicionar, listar, concluir e excluir tarefas. Também envia alertas por e-mail para tarefas pendentes.

---

## 🛠 Tecnologias utilizadas

- **Frontend:** HTML, CSS, JavaScript  
- **Backend:** Node.js com Express  
- **Envio de e-mail:** Nodemailer (Gmail SMTP)  
- **Agendamento de tarefas:** node-cron  
- **Variáveis de ambiente:** dotenv  

---

## ✅ Funcionalidades

- Adicionar tarefas com título, descrição e e-mail do usuário  
- Visualizar lista de tarefas pendentes e concluídas  
- Marcar tarefas como concluídas  
- Excluir tarefas  
- Envio automático diário (às 9h) de alertas por e-mail para tarefas pendentes  
- Envio manual de alertas via botão na interface  

---

## 🚀 Como rodar o projeto

1. Clone o repositório

2. Instale as dependências:

- Use: npm install
- Crie um arquivo .env na raiz com as seguintes variáveis:

 EMAIL_FROM=seuemail@gmail.com
 
 EMAIL_PASS=sua_senha_de_app

⚠️ Use uma senha de app do Gmail, não sua senha pessoal.

Inicie o servidor:

- node app.js

Acesse a aplicação no navegador:

- http://localhost:3000

📧 Configuração do Gmail
Ative a verificação em duas etapas da sua conta Google

- Gere uma senha de app

- Use essa senha no .env do projeto

🧪 Testes
- Adicione uma tarefa com e-mail válido

- Deixe a tarefa pendente

- Clique em “Enviar alertas” para testar envio manual ou aguarde o envio automático às 9h

🔮 Melhorias futuras
- Persistência com banco de dados

- Autenticação de usuários

- Filtro por tarefas do usuário

- Responsividade mobile
