const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Exercicio = sequelize.define("Exercicio", {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  grupoMuscular: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Exercicio;
