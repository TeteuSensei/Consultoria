const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Usuario = require("../models/Usuario");
require("dotenv").config();
const router = express.Router();

// Registro de usuário
router.post("/register", async (req, res) => {
  try {
    const { nome, email, senha, tipo } = req.body;

    // Verifica se o email já existe
    const usuarioExistente = await Usuario.findOne({ where: { email } });
    if (usuarioExistente) {
      return res.status(400).json({ error: "E-mail já cadastrado" });
    }

    // Criptografa a senha antes de salvar
    const salt = await bcrypt.genSalt(10);
    const senhaHash = await bcrypt.hash(senha, salt);

    const novoUsuario = await Usuario.create({
      nome,
      email,
      senha: senhaHash,
      tipo,
    });

    res.status(201).json(novoUsuario);
  } catch (error) {
    res.status(500).json({ error: "Erro ao registrar usuário" });
  }
});

// Login de usuário
router.post("/login", async (req, res) => {
    try {
      const { email, senha } = req.body;
  
      // Verifica se o usuário existe
      const usuario = await Usuario.findOne({ where: { email } });
      if (!usuario) {
        return res.status(400).json({ error: "Usuário não encontrado" });
      }
  
      // Verifica a senha
      const senhaValida = await bcrypt.compare(senha, usuario.senha);
      if (!senhaValida) {
        return res.status(401).json({ error: "Senha incorreta" });
      }
  
      // Gerar token JWT
      const token = jwt.sign(
        { id: usuario.id, tipo: usuario.tipo },
        process.env.JWT_SECRET,
        { expiresIn: "24h" }
      );
  
      res.json({ token, usuario });
    } catch (error) {
      console.error("Erro no login:", error); // Mostra o erro no terminal
      res.status(500).json({ error: "Erro no login", detalhe: error.message });
    }
  });
  

// **Exportação correta das rotas**
module.exports = router;
