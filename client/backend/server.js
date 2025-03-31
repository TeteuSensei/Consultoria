const express = require("express");
const cors = require("cors");
require("dotenv").config(); // ✅ Carregar variáveis do .env

const usuarioRoutes = require("./routes/usuarioRoutes");
const treinoRoutes = require("./routes/treinoRoutes");
const authRoutes = require("./routes/authRoutes");
const exercicioRoutes = require("./routes/exercicioRoutes");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Importação correta das rotas
app.use("/api", usuarioRoutes);
app.use("/api", treinoRoutes);
app.use("/api", authRoutes);
app.use("/api", exercicioRoutes);


app.get("/", (req, res) => {
  res.send("✅ API rodando!");
});

// Conectar ao Banco de Dados
const sequelize = require("./config/database");
sequelize.sync({ alter: true }).then(() => {
  console.log("✅ Banco de dados sincronizado!");
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});

console.log("Rotas carregadas:");
console.log(app._router.stack.filter(r => r.route).map(r => r.route.path));

