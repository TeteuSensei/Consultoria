const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Treino = sequelize.define("Treino", {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descricao: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  data: {
    type: DataTypes.DATEONLY, // ✅ Garante que a data será salva corretamente
    allowNull: false,
  },
  id_personal: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Treino;
