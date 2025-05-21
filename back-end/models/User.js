const Sequelize = require('sequelize');
const database = require('../db');

const User = database.define('User', {
    name: Sequelize.STRING,
    email: {
        type: Sequelize.STRING,
        unique: true
    },
    password: Sequelize.STRING,
    role: {
        type: Sequelize.STRING,
        defaultValue: 'user'
    }
})

module.exports = User;