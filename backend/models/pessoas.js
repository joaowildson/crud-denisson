const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Pessoa = sequelize.define('Pessoa', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  idade: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  uf: {
    type: DataTypes.STRING(2),
    allowNull: false
  }
}, {
  tableName: 'Pessoas'
});

module.exports = Pessoa;