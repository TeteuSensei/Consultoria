import React from "react";
import "../css/Contato.css";

const Contato = () => {
    return (
        <div className="contato">
            <h1 className="contato-title">Fale Conosco</h1>
            <p className="contato-subtitle">
                Entre em contato conosco para tirar dúvidas, solicitar informações ou qualquer outro assunto.
            </p>

            <div className="contato-container">
                {/* Formulário de Contato */}
                <div className="contato-form">
                    <h2>Envie uma mensagem</h2>
                    <form>
                        <label htmlFor="nome">Nome:</label>
                        <input type="text" id="nome" placeholder="Seu nome completo" required />

                        <label htmlFor="email">E-mail:</label>
                        <input type="email" id="email" placeholder="seuemail@exemplo.com" required />

                        <label htmlFor="assunto">Assunto:</label>
                        <input type="text" id="assunto" placeholder="Assunto da mensagem" required />

                        <label htmlFor="mensagem">Mensagem:</label>
                        <textarea id="mensagem" placeholder="Digite sua mensagem aqui" rows="5" required></textarea>

                        <button type="submit" className="btn-enviar">Enviar Mensagem</button>
                    </form>
                </div>

                {/* Informações de Contato */}
                <div className="contato-info">
                    <h2>Informações de Contato</h2>
                    <p>Entre em contato conosco pelos canais abaixo:</p>

                    <div className="info-item">
                        <strong>📞 Telefone:</strong> <span>(11) 1234-5678</span>
                    </div>
                    <div className="info-item">
                        <strong>📧 E-mail:</strong> <span>contato@consultoriafisica.com</span>
                    </div>
                    <div className="info-item">
                        <strong>🏢 Endereço:</strong>
                        <span>Rua Exemplo, 123 - São Paulo, SP</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contato;
