'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Hora_Extras', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      persona_id: {
        type: Sequelize.INTEGER
      },
      solicitante_id: {
        type: Sequelize.INTEGER
      },
      fecha_trabajo: {
        type: Sequelize.DATE
      },
      motivo: {
        type: Sequelize.STRING
      },
      trabajo_realizacion: {
        type: Sequelize.STRING
      },
      observaciones: {
        type: Sequelize.STRING
      },
      fecha_solicitud: {
        type: Sequelize.DATE
      },
      status: {
        type: Sequelize.STRING,
        allowNull:false
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
    return queryInterface.dropTable('Hora_Extras');
  }
};