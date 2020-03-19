'use strict';
module.exports = (sequelize, DataTypes) => {
  const Permisos = sequelize.define('Permisos', {
    persona_id: DataTypes.INTEGER,
    motivo: DataTypes.STRING,
    Fecha_salida: DataTypes.DATE,
    Hora_salida: DataTypes.DATE,
    Hora_entrada: DataTypes.DATE
  }, {});
  Permisos.associate = function(models) {
    // associations can be defined here
    Permisos.belongsTo(models.Persona,{
      foreingKey:persona.id
    })
  };
  return Permisos;
};