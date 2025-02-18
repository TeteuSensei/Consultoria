import React from "react";
import "../css/Contato.css";

const Contato = () => {
  return (
    <div className="contato-page">
      {/* Banner com imagem de fundo */}
      <section className="contato-banner">
        <div className="overlay-content">
          {/* Informações na esquerda */}
          <div className="contato-info">
            <h1>Entre em Contato</h1>
            <p>
              Estamos prontos para ajudar! Entre em contato conosco para tirar
              dúvidas, solicitar informações ou qualquer outro assunto.
            </p>
            <ul>
              <li>📞 Telefone: (11) 1234-5678</li>
              <li>📧 E-mail: contato@consultoriafisica.com</li>
              <li>🏢 Endereço: Rua Exemplo, 123 - São Paulo, SP</li>
            </ul>
          </div>

          {/* Formulário na direita */}
          <div className="contato-form">
            <h2>Envie uma mensagem</h2>
            <form>
              <div className="form-group">
                <label htmlFor="nome">Nome*</label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  placeholder="Seu nome completo"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">E-mail*</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="seuemail@exemplo.com"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="assunto">Assunto*</label>
                <input
                  type="text"
                  id="assunto"
                  name="assunto"
                  placeholder="Assunto da mensagem"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="mensagem">Mensagem*</label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  placeholder="Digite sua mensagem aqui"
                  rows="5"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn-primary">
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contato;
