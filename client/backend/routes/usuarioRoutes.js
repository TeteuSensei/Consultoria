const express = require("express");
const Usuario = require("../models/Usuario");
const router = express.Router();

// Criar um usuário
router.post("/usuarios", async (req, res) => {
  try {
    const novoUsuario = await Usuario.create(req.body);
    res.status(201).json(novoUsuario);
  } catch (error) {
    res.status(500).json({ error: "Erro ao criar usuário" });
  }
});

// Rota para listar todos os usuários
router.get("/usuarios", async (req, res) => {
    try {
      const usuarios = await Usuario.findAll();
      res.json(usuarios);
    } catch (error) {
      res.status(500).json({ error: "Erro ao buscar usuários" });
    }
  });

module.exports = router;
