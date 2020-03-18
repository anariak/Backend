'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Personas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Nombres: {
        type: Sequelize.STRING
      },
      ApellidoPaterno: {
        type: Sequelize.STRING
      },
      ApellidoMaterno: {
        type: Sequelize.STRING
      },
      rut: {
        type: Sequelize.STRING
      },
      FechaIngreso: {
        type: Sequelize.DATE
      },
      Seccion: {
        type: Sequelize.INTEGER
      },
      mail: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Personas');
  }
};