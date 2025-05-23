// modelo da tabela de usuários

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    cpf: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    role: {
      type: DataTypes.ENUM('admin', 'user'),
      allowNull: false
    }
  });

  User.associate = (models) => {
  User.hasMany(models.Transaction, {
    foreignKey: 'userId',
    as: 'transactions',
  });
};

return User;
};