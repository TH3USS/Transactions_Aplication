const Sequelize = require('sequelize');
const database = require('../db');

const Transaction = database.define('Transaction', {
  cpf: Sequelize.STRING,
  description: Sequelize.STRING,
  date: Sequelize.DATE,
  points: Sequelize.FLOAT,
  value: Sequelize.FLOAT,
  status: Sequelize.STRING
});

Transaction.belongsTo(User);

module.exports = Transaction;