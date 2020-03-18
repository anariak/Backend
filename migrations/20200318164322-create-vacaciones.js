'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Vacaciones', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      persona_id: {
        type: Sequelize.INTEGER
      },
      Fecha_desde: {
        type: Sequelize.DATE
      },
      fecha_termino: {
        type: Sequelize.DATE
      },
      fecha_solicitud: {
        type: Sequelize.DATE
      },
      status:{ 
        allowNull:false,
        type:Sequelize.STRING
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
    return queryInterface.dropTable('Vacaciones');
  }
};