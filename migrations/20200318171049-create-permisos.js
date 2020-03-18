'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Permisos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      persona_id: {
        type: Sequelize.INTEGER
      },
      motivo: {
        type: Sequelize.STRING
      },
      Fecha_salida: {
        type: Sequelize.DATE
      },
      Hora_salida: {
        type: Sequelize.DATE
      },
      Hora_entrada: {
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
    return queryInterface.dropTable('Permisos');
  }
};