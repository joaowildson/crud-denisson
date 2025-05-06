const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('crud', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false // opcional: oculta os logs SQL no console
});

module.exports = sequelize;