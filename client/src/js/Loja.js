import React from "react";
import "../css/Loja.css"; // Adicione um arquivo CSS específico para estilizar a página da loja

const Loja = () => {
  return (
    <div className="loja-container">
      {/* Banner principal da loja */}
      <div className="loja-banner">
        <h1>Bem-vindo à Nossa Loja Fitness</h1>
        <p>Encontre os melhores produtos para alcançar seus objetivos de saúde e bem-estar.</p>
      </div>

      {/* Caixa de navegação */}
      <div className="secoes-navegacao">
        <a href="#produtos-destaque" className="secao-link">Produtos em Destaque</a>
        <a href="#roupas-fitness" className="secao-link">Roupas Fitness</a>
        <a href="#equipamentos" className="secao-link">Equipamentos</a>
        <a href="#suplementos" className="secao-link">Suplementos</a>
      </div>

      {/* Seção de Produtos em Destaque */}
      <section id="produtos-destaque" className="produtos-destaque">
        <h2>Produtos em Destaque</h2>
        <div className="produtos-container">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={`produto-destaque-${index}`} className="produto-card">
              <img
                src={`https://via.placeholder.com/150?text=Produto+Destaque+${index + 1}`}
                alt={`Produto Destaque ${index + 1}`}
              />
              <h3>Produto Destaque {index + 1}</h3>
              <p>R$ {(index + 1) * 50},00</p>
              <button className="btn-comprar">Comprar</button>
            </div>
          ))}
        </div>
      </section>

      {/* Seção de Roupas Fitness */}
      <section id="roupas-fitness" className="roupas-fitness">
        <h2>Roupas Fitness</h2>
        <div className="produtos-container">
          {Array.from({ length: 8 }).map((_, index) => (
            <div key={`roupa-fitness-${index}`} className="produto-card">
              <img
                src={`https://via.placeholder.com/150?text=Roupa+Fitness+${index + 1}`}
                alt={`Roupa Fitness ${index + 1}`}
              />
              <h3>Roupa Fitness {index + 1}</h3>
              <p>R$ {(index + 1) * 40},00</p>
              <button className="btn-comprar">Comprar</button>
            </div>
          ))}
        </div>
      </section>

      {/* Seção de Equipamentos */}
      <section id="equipamentos" className="equipamentos">
        <h2>Equipamentos</h2>
        <div className="produtos-container">
          {Array.from({ length: 8 }).map((_, index) => (
            <div key={`equipamento-${index}`} className="produto-card">
              <img
                src={`https://via.placeholder.com/150?text=Equipamento+${index + 1}`}
                alt={`Equipamento ${index + 1}`}
              />
              <h3>Equipamento {index + 1}</h3>
              <p>R$ {(index + 1) * 100},00</p>
              <button className="btn-comprar">Comprar</button>
            </div>
          ))}
        </div>
      </section>

      {/* Seção de Suplementos */}
      <section id="suplementos" className="suplementos">
        <h2>Suplementos</h2>
        <div className="produtos-container">
          {Array.from({ length: 8 }).map((_, index) => (
            <div key={`suplemento-${index}`} className="produto-card">
              <img
                src={`https://via.placeholder.com/150?text=Suplemento+${index + 1}`}
                alt={`Suplemento ${index + 1}`}
              />
              <h3>Suplemento {index + 1}</h3>
              <p>R$ {(index + 1) * 30},00</p>
              <button className="btn-comprar">Comprar</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Loja;
