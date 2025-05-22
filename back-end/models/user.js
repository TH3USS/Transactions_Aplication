// modelo da tabela de usuários
const Sequelize = require('sequelize');
const database = require('../config/db');

const User = database.define('User', {
    name: Sequelize.STRING,
    email: {
        type: Sequelize.STRING,
        unique: true
    },
    password: Sequelize.STRING,
    role: {
        type: Sequelize.ENUM('admin', 'user'),
        defaultValue: 'user',
    },
});

module.exports = User;