import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../css/CadastroTreino.css";

const CadastroTreino = () => {
  const [nomeTreino, setNomeTreino] = useState("");
  const [objetivo, setObjetivo] = useState("");
  const [data, setData] = useState("");
  const [exercicios, setExercicios] = useState([]);
  const [treinoSelecionado, setTreinoSelecionado] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Busca exercícios cadastrados no localStorage
    const storedExercicios = JSON.parse(localStorage.getItem("exercicios")) || [];
    setExercicios(storedExercicios);
  }, []);

  const handleSelecionarExercicio = (exercicio) => {
    setTreinoSelecionado([...treinoSelecionado, exercicio]);
  };

  const handleCadastroTreino = (e) => {
    e.preventDefault();

    if (!nomeTreino || !objetivo || treinoSelecionado.length === 0) {
      alert("Preencha todos os campos e selecione pelo menos um exercício.");
      return;
    }

    const novoTreino = {
      nome: nomeTreino,
      objetivo,
      data,
      exercicios: treinoSelecionado,
    };

    const storedTreinos = JSON.parse(localStorage.getItem("treinos")) || [];
    storedTreinos.push(novoTreino);
    localStorage.setItem("treinos", JSON.stringify(storedTreinos));

    alert("Treino cadastrado com sucesso!");
    navigate("/dashboard");
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
            exercicios.map((exercicio, index) => (
              <li key={index}>
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
      </form>
    </div>
  );
};

export default CadastroTreino;
