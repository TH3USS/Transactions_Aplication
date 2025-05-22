'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Transactions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      cpf: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING,
      },
      date: {
        type: Sequelize.DATEONLY,
      },
      points: {
        type: Sequelize.FLOAT,
      },
      value: {
        type: Sequelize.FLOAT,
      },
      status: {
        type: Sequelize.ENUM('Approved', 'disapproved', 'Under validation'),
        defaultValue: 'Under validation',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Transactions');
  }
};


// 'use strict';

// module.exports = {
//   up: async (queryInterface, Sequelize) => {
//     await queryInterface.createTable('Users', {
//       id: {
//         type: Sequelize.INTEGER,
//         primaryKey: true,
//         autoIncrement: true
//       },
//       name: Sequelize.STRING,
//       cpf: {
//         type: Sequelize.STRING,
//         unique: true
//       },
//       email: {
//         type: Sequelize.STRING,
//         unique: true
//       },
//       password: Sequelize.STRING,
//       role: {
//         type: Sequelize.ENUM('admin', 'user'),
//         defaultValue: 'user'
//       },
//       createdAt: Sequelize.DATE,
//       updatedAt: Sequelize.DATE
//     });
//   },

//   down: async (queryInterface) => {
//     await queryInterface.dropTable('Users');
//   }
// };
