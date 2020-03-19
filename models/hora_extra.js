'use strict';
module.exports = (sequelize, DataTypes) => {
  const Hora_Extra = sequelize.define('Hora_Extra', {
    persona_id: DataTypes.INTEGER,
    solicitante_id: DataTypes.INTEGER,
    fecha_trabajo: DataTypes.DATE,
    motivo: DataTypes.STRING,
    trabajo_realizacion: DataTypes.STRING,
    observaciones: DataTypes.STRING,
    fecha_solicitud: DataTypes.DATE,
    status: DataTypes.STRING
  }, {});
  Hora_Extra.associate = function(models) {
    // associations can be defined here
    Hora_Extra.belongsTo(models.Persona)
  };
  return Hora_Extra;
};