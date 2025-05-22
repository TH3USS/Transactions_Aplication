// // modelo da tabela de transações
// const Sequelize = require('sequelize');
// const database = require('../config/db');

// const Transaction = database.define('Transaction', {
//   cpf: Sequelize.STRING,
//   description: Sequelize.STRING,
//   date: Sequelize.DATE,
//   points: Sequelize.FLOAT,
//   value: Sequelize.FLOAT,
//   status: Sequelize.STRING
// });

// // Transaction.belongsTo(User);

// module.exports = Transaction;

module.exports = (sequelize, DataTypes) => {
  const Transaction = sequelize.define('Transaction', {
    cpf: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    points: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    value: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userId: {
    type: Sequelize.INTEGER,
    allowNull: true,
    references: {
      model: 'Users',
      key: 'id'
    }
    }
  });

  Transaction.belongsTo(User);

  return Transaction;
};
