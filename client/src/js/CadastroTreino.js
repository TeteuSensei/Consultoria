import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../css/CadastroTreino.css";

const CadastroTreino = () => {
  const [nomeTreino, setNomeTreino] = useState("");
  const [objetivo, setObjetivo] = useState("");
  const [data, setData] = useState("");
  const [exercicios, setExercicios] = useState([]);
  const [treinoSelecionado, setTreinoSelecionado] = useState([]);
  const [mensagem, setMensagem] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const carregarExercicios = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/exercicios", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        });
        const data = await response.json();
        setExercicios(data);
      } catch (error) {
        console.error("Erro ao carregar exercícios:", error);
      }
    };
  
    carregarExercicios();
  }, []);
  

  const handleSelecionarExercicio = (exercicio) => {
    setTreinoSelecionado([...treinoSelecionado, exercicio]);
  };

  const handleCadastroTreino = async (e) => {
    e.preventDefault();

    if (!nomeTreino || !objetivo || treinoSelecionado.length === 0) {
      alert("Preencha todos os campos e selecione pelo menos um exercício.");
      return;
    }

    try {
      const token = localStorage.getItem("token");
      await axios.post(
        "http://localhost:3001/api/treinos",
        {
          nome: nomeTreino,
          descricao: objetivo,
          data,
          exercicios: treinoSelecionado.map((ex) => ex.id),
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      setMensagem("Treino cadastrado com sucesso!");
      setTimeout(() => navigate("/dashboard"), 1500);
    } catch (error) {
      setMensagem("Erro ao cadastrar treino.");
      console.error("Erro:", error);
    }
  };

  return (
    <div className="cadastro-treino-container">
      <h2>Cadastrar Novo Treino</h2>
      <form onSubmit={handleCadastroTreino}>
        <label>Nome do Treino:</label>
        <input type="text" value={nomeTreino} onChange={(e) => setNomeTreino(e.target.value)} required />

        <label>Objetivo do Treino:</label>
        <input type="text" value={objetivo} onChange={(e) => setObjetivo(e.target.value)} required />

        <label>Data:</label>
        <input type="date" value={data} onChange={(e) => setData(e.target.value)} required />

        <h3>Selecione os Exercícios:</h3>
        <ul className="lista-exercicios">
          {exercicios.length > 0 ? (
            exercicios.map((exercicio) => (
              <li key={exercicio.id}>
                {exercicio.nome} - {exercicio.grupoMuscular}
                <button type="button" onClick={() => handleSelecionarExercicio(exercicio)}>Adicionar</button>
              </li>
            ))
          ) : (
            <p>Nenhum exercício cadastrado.</p>
          )}
        </ul>

        <h3>Exercícios Selecionados:</h3>
        <ul className="exercicios-selecionados">
          {treinoSelecionado.map((exercicio, index) => (
            <li key={index}>{exercicio.nome} - {exercicio.grupoMuscular}</li>
          ))}
        </ul>

        <button type="submit">Cadastrar Treino</button>
        {mensagem && <p>{mensagem}</p>}
      </form>
    </div>
  );
};

export default CadastroTreino;
