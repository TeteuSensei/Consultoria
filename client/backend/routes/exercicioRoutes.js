const express = require("express");
const Exercicio = require("../models/Exercicio");
const autenticarToken = require("../middlewares/authMiddleware");

const router = express.Router();

// 🔍 Rota para listar todos os exercícios
router.get("/exercicios", async (req, res) => {
  try {
    const exercicios = await Exercicio.findAll();
    res.json(exercicios);
  } catch (error) {
    console.error("Erro ao buscar exercícios:", error);
    res.status(500).json({ error: "Erro ao buscar exercícios" });
  }
});

// 🔒 Rota protegida: Criar um novo exercício
router.post("/exercicios", autenticarToken, async (req, res) => {
  try {
    const { nome, grupoMuscular } = req.body;

    if (!nome || !grupoMuscular) {
      return res.status(400).json({ error: "Nome e grupo muscular são obrigatórios." });
    }

    const novoExercicio = await Exercicio.create({ nome, grupoMuscular });

    res.status(201).json(novoExercicio);
  } catch (error) {
    console.error("Erro ao cadastrar exercício:", error);
    res.status(500).json({ error: "Erro ao cadastrar exercício" });
  }
});

module.exports = router;
