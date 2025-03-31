const express = require("express");
const Treino = require("../models/Treino");
const Exercicio = require("../models/Exercicio"); // Importação dos exercícios
const autenticarToken = require("../middlewares/authMiddleware");
const router = express.Router();

// 🔒 Rota protegida: Criar um novo treino e associar exercícios
router.post("/treinos", autenticarToken, async (req, res) => {
  try {
    const { nome, descricao, data, exercicios } = req.body;

    if (!nome || !descricao || !data) {
      return res.status(400).json({ error: "Todos os campos são obrigatórios" });
    }

    // Criar treino no banco
    const novoTreino = await Treino.create({
      nome,
      descricao,
      data, // ✅ Agora a data será salva corretamente
      id_personal: req.usuario.id,
    });

    // Associar exercícios ao treino
    if (exercicios && exercicios.length > 0) {
      const listaExercicios = await Exercicio.findAll({ where: { id: exercicios } });
      await novoTreino.addExercicios(listaExercicios);
    }

    res.status(201).json({ treino: novoTreino, exerciciosAssociados: exercicios });
  } catch (error) {
    console.error("Erro ao cadastrar treino:", error);
    res.status(500).json({ error: "Erro ao cadastrar treino" });
  }
});


// 🔒 Rota protegida: Buscar treinos do usuário logado junto com os exercícios associados
router.get("/treinos", autenticarToken, async (req, res) => {
  try {
    const treinos = await Treino.findAll({
      where: { id_personal: req.usuario.id },
      attributes: ["id", "nome", "descricao", "data", "id_personal"], // ✅ Inclui a data
      include: {
        model: Exercicio,
        as: "Exercicios",
        through: { attributes: [] }, // Remove os metadados da tabela intermediária
      },
    });

    res.json(treinos);
  } catch (error) {
    console.error("Erro ao buscar treinos:", error);
    res.status(500).json({ error: "Erro ao buscar treinos" });
  }
});


module.exports = router;
