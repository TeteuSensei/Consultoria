const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: process.env.DB_HOST,
      dialect: process.env.DB_DIALECT,
      logging: false,
      define: {
        timestamps: false, // Desativa createdAt e updatedAt
      },
    }
  );
  

sequelize
  .authenticate()
  .then(() => console.log("✅ Conexão com MySQL bem-sucedida!"))
  .catch((error) => console.error("❌ Erro ao conectar ao MySQL:", error));

module.exports = sequelize;
