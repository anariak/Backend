'use strict';
module.exports = (sequelize, DataTypes) => {
  const Persona = sequelize.define('Persona', {
    Nombres: DataTypes.STRING,
    ApellidoPaterno: DataTypes.STRING,
    ApellidoMaterno: DataTypes.STRING,
    rut: DataTypes.STRING,
    FechaIngreso: DataTypes.DATE,
    Seccion: DataTypes.INTEGER,
    mail: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  Persona.associate = function(models) {
    // associations can be defined here
  };
  return Persona;
};