const express = require("express");
const cors = require("cors");
require("dotenv").config();
const usuarioRoutes = require("./routes/usuarioRoutes");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Importando as rotas
app.use("/api", usuarioRoutes);

app.get("/", (req, res) => {
  res.send("✅ API rodando!");
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});


const usuarioRoutes = require("./routes/usuarioRoutes");
app.use("/api", usuarioRoutes);

const sequelize = require("./config/database");

sequelize.sync({ alter: true }).then(() => {
  console.log("✅ Banco de dados sincronizado!");
});
