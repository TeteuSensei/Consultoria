import React from "react";
import "../css/Consultoria.css";
import personal1Image from "../css/Imagens/Consultoria/personal.jpg";
import personal2Image from "../css/Imagens/Consultoria/personal.jpg";
import personal3Image from "../css/Imagens/Consultoria/personal.jpg";
import secao3emagrecimento from "../css/Imagens/Consultoria/secao2emagrecimento.png";
import secao3hipertrofia from "../css/Imagens/Consultoria/hipertrofia.jpg";
import secao3muscular from "../css/Imagens/Consultoria/definicaomuscular.jpg";

const Consultoria = () => {
  // Lista de personais
  const personais = [
    {
      id: 1,
      name: "João Silva",
      image: personal1Image,
      description:
        "João tem mais de 10 anos de experiência, ajudando clientes a alcançarem seus objetivos, desde emagrecimento até hipertrofia.",
      certifications: [
        "Certificação Internacional em Treinamento Funcional",
        "Especialista em Emagrecimento",
      ],
    },
    {
      id: 2,
      name: "Maria Oliveira",
      image: personal2Image,
      description:
        "Maria é especialista em treinos personalizados para mulheres, focando em saúde e bem-estar.",
      certifications: ["Pilates Avançado", "Nutrição Esportiva"],
    },
    {
      id: 3,
      name: "Carlos Pereira",
      image: personal3Image,
      description:
        "Carlos é expert em treinos para atletas de alta performance e reabilitação esportiva.",
      certifications: ["Reabilitação Esportiva", "Treinamento de Força"],
    },
  ];

  return (
    <div className="consultoria-page">
      {/* Seção 1: Apresentação da Consultoria */}
      <section className="consultoria-section apresentacao">
        <div className="section-content">
          <h1>Resultados Definitivos com Nossos Parceiros</h1>
          <p>
            Conheça nossos personais parceiros e tenha resultados surpreendentes
            com treinos personalizados e acompanhamento especializado.
          </p>
        </div>
      </section>

      {/* Seção 2: Vitrine de Personais */}
      <section className="consultoria-section personais-section">
        <h2>Conheça Nossos Personais</h2>
        <div className="personais-grid">
          {personais.map((personal) => (
            <div key={personal.id} className="personal-card">
              <img
                src={personal.image}
                alt={`Imagem de ${personal.name}`}
                className="personal-image"
              />
              <h3>{personal.name}</h3>
              <p>{personal.description}</p>
              <ul>
                {personal.certifications.map((cert, index) => (
                  <li key={index}>{cert}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Seção 3: Como eu vou te ajudar */}
      <section className="consultoria-section ajuda">
        <div className="help-section">
          <h2>Como iremos te ajudar</h2>
          <p>
            Com nossa consultoria online, você terá uma planilha de treino de
            acordo com os seus objetivos, disponibilidade e levando em conta
            todo o seu histórico de treinamento.
          </p>
          <div className="help-cards">
            <div className="card">
              <img src={secao3emagrecimento} alt="Emagrecimento" />
              <h3>Emagrecimento</h3>
              <a href="/emagrecimento">Saiba como</a>
            </div>
            <div className="card">
              <img src={secao3hipertrofia} alt="Hipertrofia" />
              <h3>Hipertrofia</h3>
              <a href="/hipertrofia">Saiba como</a>
            </div>
            <div className="card">
              <img src={secao3muscular} alt="Definição muscular" />
              <h3>Definição muscular</h3>
              <a href="/definicao-muscular">Saiba como</a>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 4: Formulário de Contato */}
      {/* Seção 4: Formulário de Contato */}
<section className="consultoria-section formulario">
  <div className="section-content">
    <h2>Entre em Contato</h2>
    <p>
      Preencha o formulário abaixo e entraremos em contato com você o mais breve possível!
    </p>
    <form className="consultoria-form">
      <div className="form-group">
        <label htmlFor="name">Nome*</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Digite seu nome completo"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email*</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Digite seu email"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Telefone*</label>
        <input
          type="text"
          id="phone"
          name="phone"
          placeholder="Digite seu telefone"
          required
        />
      </div>
      <button type="submit" className="btn-primary">
        Enviar
      </button>
    </form>
  </div>
</section>

    </div>
  );
};

export default Consultoria;
