📊 Sistema de Upload e Gerenciamento de Transações

Esse projeto consiste em um sistema para upload e processamento de planilhas Excel contendo transações, com backend em Node.js (Express + Sequelize) e frontend em React.

## **Estrutura do Projeto**

> A seguir é apresentada a organização da estrutura utilizada no projeto, mostrando a disposição dos principais scripts e arquivos:

### Backend

O backend foi desenvolvido em Node.js utilizando Express para criação da API e Sequelize para ORM com banco de dados relacional.

<pre>
├── Back-End
│   ├── controllers/
│   │   └── uploadController.js       # Controlador para upload e processamento das planilhas
│   ├── models/
│   │   ├── user.js                   # Modelo do usuário
│   │   └── transaction.js            # Modelo de transação
│   ├── routes/
│   │   └── index.js                  # Rotas da API
│   ├── middleware/
│   │   └── auth.js                   # Middleware de autenticação
│   ├── config/
│   │   └── database.js               # Configuração do Sequelize e banco de dados
│   ├── app.js                        # Arquivo principal da API
│   └── package.json                  # Dependências do projeto
</pre>

### Frontend

O frontend foi desenvolvido em React, consumindo as APIs do backend para exibir dados e permitir interações do usuário.

<pre>
├── Front-End
│   ├── src/
│   │   ├── components/
│   │   │   └── UploadForm.jsx        # Componente para upload de planilhas
│   │   ├── pages/
│   │   │   └── Wallet.jsx            # Página da carteira de pontos
│   │   ├── App.jsx                   # Componente principal
│   │   ├── index.js                  # Entrada do React
│   │   └── styles/
│   │       └── main.css              # Arquivo de estilos
│   ├── package.json                  # Dependências do frontend
</pre>

---

# **🔹 Passo a Passo para Rodar o Projeto**

## **1️⃣ Pré-requisitos**

Antes de começar, é necessário ter instalado:  
✅ **Node.js + npm** → [Download Node.js](https://nodejs.org/)  
✅ **Banco de dados relacional** (ex: MySQL, PostgreSQL ou SQL Server)  
✅ **Git** → [Download Git](https://git-scm.com/downloads)

---

## **2️⃣ Clonar o Repositório**

No terminal execute:

```sh
git clone https://github.com/seuusuario/seuprojeto.git
```

---

## **3️⃣ Configurar Banco de Dados**

* Crie o banco de dados e configure a conexão no arquivo `config/database.js` conforme seu ambiente.

---

## **4️⃣ Rodar o Backend**

No terminal, dentro da pasta do backend execute:

```sh
npm install
npx sequelize db:migrate
npm start
```

Isso instala dependências, aplica as migrações e inicia o servidor.

---

## **5️⃣ Rodar o Frontend**

Na pasta do frontend execute:

```sh
npm install
npm run dev
```

Isso instala dependências e inicia o ambiente React.

---

Se **tudo estiver rodando e acessível sem erros**, seu projeto está pronto! 🚀🎉

---

# **🔥 Resumo dos Comandos**

```sh
# Clonar o projeto
git clone https://github.com/seuusuario/seuprojeto.git

# Rodar Backend
npm install
npx sequelize db:migrate
npm start

# Rodar Frontend
npm install
npm run dev
```

---

# **📌 Tecnologias e Ferramentas Utilizadas**

## **1️⃣ Frontend - React.js**

O frontend foi desenvolvido com React.js para uma interface dinâmica e responsiva.

### 🔹 Tecnologias principais no frontend

✅ **React.js** → Biblioteca para UI reativa  
✅ **Vite** → Ambiente de desenvolvimento rápido  
✅ **CSS** → Estilização da aplicação  

---

## **2️⃣ Backend - Node.js com Express e Sequelize**

Backend RESTful com Node.js e Express para roteamento e Sequelize para ORM, facilitando manipulação do banco.

### 🔹 Tecnologias principais no backend

✅ **Node.js** → Ambiente JavaScript no servidor  
✅ **Express** → Framework para criação da API  
✅ **Sequelize** → ORM para banco relacional  
✅ **Multer** → Upload de arquivos  

---

## **3️⃣ Banco de Dados Relacional**

Banco para armazenar usuários e transações.

### 🔹 Exemplos compatíveis

✅ **MySQL**  
✅ **PostgreSQL**  
✅ **SQL Server**  

---

## **4️⃣ Ferramentas Auxiliares**

✅ **Git & GitHub** → Controle de versão  
✅ **Visual Studio Code** → IDE para desenvolvimento  
✅ **Postman** → Testes de API  

---

# **🚀 Conclusão**

Este projeto integra frontend em React com backend Node.js, facilitando upload e controle de transações via planilhas Excel, garantindo um fluxo de dados eficiente, seguro e escalável.
