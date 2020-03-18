'use strict';
module.exports = (sequelize, DataTypes) => {
  const Vacaciones = sequelize.define('Vacaciones', {
    persona_id: DataTypes.INTEGER,
    Fecha_desde: DataTypes.DATE,
    fecha_termino: DataTypes.DATE,
    fecha_solicitud: DataTypes.DATE
  }, {});
  Vacaciones.associate = function(models) {
    // associations can be defined here
  };
  return Vacaciones;
};