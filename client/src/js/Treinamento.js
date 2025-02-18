import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/Treinamento.css";

// Dados provisórios com imagens genéricas
const areas = [
  { name: "Abdômen", img: "https://media.istockphoto.com/id/2010149116/es/vector/icono-de-usuario-predeterminado-de-la-foto-del-avatar-imagen-de-persona-avatar-imagen-cara.jpg?s=612x612&w=0&k=20&c=6VLv2AgXt-ZeFhXug24vP7e2MSKZkrslYvTIwqEzloA=", link: "/treino/abdomen" },
  { name: "Antebraços", img: "https://via.placeholder.com/300x200", link: "/treino/antebracos" },
  { name: "Bíceps", img: "https://via.placeholder.com/300x200?text=Bíceps", link: "/treino/biceps" },
  { name: "Dorsal", img: "https://via.placeholder.com/300x200?text=Dorsal", link: "/treino/dorsal" },
  { name: "Glúteos", img: "https://via.placeholder.com/300x200?text=Glúteos", link: "/treino/gluteos" },
  { name: "Inferiores Costas", img: "https://via.placeholder.com/300x200?text=Inferiores+Costas", link: "/treino/inferiorescostas" },
  { name: "Oblíquos", img: "https://via.placeholder.com/300x200?text=Oblíquos", link: "/treino/obliquos" },
  { name: "Ombro", img: "https://via.placeholder.com/300x200?text=Ombro", link: "/treino/ombro" },
  { name: "Panturrilha", img: "https://via.placeholder.com/300x200?text=Panturrilha", link: "/treino/panturrilha" },
  { name: "Peito", img: "https://via.placeholder.com/300x200?text=Peito", link: "/treino/peito" },
  { name: "Quadríceps", img: "https://via.placeholder.com/300x200?text=Quadríceps", link: "/treino/quadriceps" },
  { name: "Trapézio", img: "https://via.placeholder.com/300x200?text=Trapézio", link: "/treino/trapezio" },
  { name: "Trapézio Inferior", img: "https://via.placeholder.com/300x200?text=Trapézio+Inferior", link: "/treino/trapezioinferior" },
  { name: "Tríceps", img: "https://via.placeholder.com/300x200?text=Tríceps", link: "/treino/triceps" },
];

const Treinamento = () => {
  const [search, setSearch] = useState("");

  const filteredAreas = areas.filter((area) =>
    area.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="treinamento-page">
      {/* Cabeçalho */}
      <header className="treinamento-header">
        <h1>Treinamento Personalizado</h1>
        <input
          type="text"
          placeholder="Buscar área de treino..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-bar"
        />
      </header>

      {/* Grid de Treinamento */}
      <main className="treinamento-grid">
        {filteredAreas.map((area, index) => (
          <div key={index} className="treinamento-card">
            <img src={area.img} alt={area.name} className="treinamento-img" />
            <button className="favorite-btn">❤️</button>
            <div className="treinamento-overlay">
              <h3 className="treinamento-title">{area.name}</h3>
              <p className="treinamento-desc">
                Treine sua {area.name} com exercícios personalizados.
              </p>
              <Link to={area.link} className="treinamento-btn">
                <i className="fas fa-dumbbell"></i> Explorar
              </Link>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default Treinamento;
