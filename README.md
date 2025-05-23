📊 Sistema de Upload e Gerenciamento de Transações

Esse projeto consiste em um sistema para upload e processamento de planilhas Excel contendo transações, com backend em Node.js (Express + Sequelize) e frontend em React.

## **Estrutura do Projeto**

> A seguir é apresentada a organização da estrutura utilizada no projeto, mostrando a disposição dos principais scripts e arquivos:

### Backend

O backend foi desenvolvido em Node.js utilizando Express para criação da API e Sequelize para ORM com banco de dados relacional.

### Frontend

O frontend foi desenvolvido em React, consumindo as APIs do backend para exibir dados e permitir interações do usuário.

---

# **🔹 Passo a Passo para Rodar o Projeto**

## **1️⃣ Pré-requisitos**

Antes de começar, é necessário ter instalado:  
✅ **Node.js + npm** → [Download Node.js](https://nodejs.org/)  
✅ **Banco de dados relacional** (MySQL)  
✅ **Git** → [Download Git](https://git-scm.com/downloads)

---

## **2️⃣ Clonar o Repositório**

No terminal execute:

```sh
git clone https://github.com/TH3USS/Transactions_Aplication.git
```

---

## **3️⃣ Configurar Banco de Dados**

* Crie o banco de dados e configure a conexão no arquivo `config/database.js` conforme seu ambiente.

---

## **4️⃣ Rodar o Backend**

No terminal, dentro da pasta do backend execute:

```sh
npm install
node createDb.js
npx sequelize-cli db:migrate
npm run dev
```

Isso instala dependências, cria o banco de dados, aplica as migrações e inicia o servidor.

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
E pode ser acessado pelo navegador na porta indicada no terminar seguido por `/login`, como no exemplo abaixo: 
```sh
http://localhost:5173/login
```
---

# **🔥 Resumo dos Comandos**

```sh
# Clonar o projeto
git clone https://github.com/TH3USS/Transactions_Aplication.git

# Rodar Backend
npm install
node createDb.js
npx sequelize-cli db:migrate
npm run dev

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
✅ **JWT** → Criação de token para validação de usuário
✅ **bcryptjs** → Para criptografia da senha
✅ **xlsx** → Leitura de planilhas

---

## **3️⃣ Banco de Dados Relacional**

Banco utilizado para armazenar usuários e transações.

✅ **MySQL**

---

## **4️⃣ Ferramentas Auxiliares**

✅ **Git & GitHub** → Controle de versão  
✅ **Visual Studio Code** → IDE para desenvolvimento  
✅ **Insomnia** → Testes de API  

---

# **🚀 Conclusão**

Este projeto integra frontend em React com backend Node.js, facilitando upload e controle de transações via planilhas Excel, garantindo um fluxo de dados eficiente, seguro e escalável.
