import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../css/Dashboard.css";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const [treinos, setTreinos] = useState([]);

  useEffect(() => {
    // Verifica se o usuário está autenticado
    const storedUser = JSON.parse(localStorage.getItem("usuario"));
    if (!storedUser) {
      navigate("/login");
    } else {
      setUser(storedUser);
    }

    // Buscar treinos do banco de dados
    const fetchTreinos = async () => {
      try {
        const token = localStorage.getItem("token"); // Pega o token salvo
        const response = await axios.get("http://localhost:3001/api/treinos", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setTreinos(response.data);
      } catch (error) {
        console.error("Erro ao buscar treinos:", error);
      }
    };

    fetchTreinos();
  }, [navigate]);

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <h3>Menu</h3>
        <ul>
          <li onClick={() => navigate("/consultoria")}>📋 Consultoria</li>
          <li onClick={() => navigate("/treinamento")}>🏋️ Exercícios</li>
          <li onClick={() => navigate("/loja")}>🛍️ Loja</li>
          <li onClick={() => navigate("/perfil")}>👤 Meu Perfil</li>
        </ul>
      </aside>

      <main className="dashboard-content">
        <h2>Bem-vindo, {user?.nome}!</h2>

        {/* Cards informativos */}
        <div className="cards">
          <div className="card">
            <h3>Treinos Ativos</h3>
            <p>{treinos.length}</p>
          </div>
          <div className="card">
            <h3>Consultas Agendadas</h3>
            <p>2</p>
          </div>
        </div>

        {/* Lista de treinos cadastrados */}
        <div className="treino-list">
          <h3>Meus Treinos</h3>
          <table>
            <thead>
              <tr>
                <th>Nome do Treino</th>
                <th>Objetivo</th>
                <th>Data</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {treinos.length > 0 ? (
                treinos.map((treino, index) => (
                  <tr key={index}>
                    <td>{treino.nome}</td>
                    <td>{treino.objetivo}</td>
                    <td>{new Date(treino.data).toLocaleDateString()}</td>
                    <td>
                      <button onClick={() => navigate(`/treino/${treino.id}`)}>Ver</button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4">Nenhum treino cadastrado</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
