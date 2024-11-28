import React from "react";
import "../css/Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Central de Atendimento */}
                <div className="footer-section">
                    <h3>Central de Atendimento</h3>
                    <ul>
                        <li><a href="#sobre">Sobre a Consultoria Física</a></li>
                        <li><a href="#team">Team Consultoria</a></li>
                        <li><a href="#politica">Política de Privacidade</a></li>
                        <li><a href="#trocas">Política de Troca e Devolução</a></li>
                        <li><a href="#contato">Fale Conosco</a></li>
                        <li><a href="#blog">Blog</a></li>
                        <li><a href="#pagamento">Formas de Pagamento</a></li>
                    </ul>
                </div>

                {/* Informações de Contato */}
                <div className="footer-section">
                    <h3>Contato</h3>
                    <p>📞 Telefone: (11) 1234-5678</p>
                    <p>📧 E-mail: contato@consultoriafisica.com</p>
                    <div className="footer-socials">
                        <h4>Siga nas redes sociais:</h4>
                        <div className="social-icons">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a>
                            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">TikTok</a>
                            <a href="https://telegram.org" target="_blank" rel="noopener noreferrer">Telegram</a>
                        </div>
                    </div>
                </div>

                {/* Segurança e Direitos */}
                <div className="footer-section">
                    <h3>Segurança</h3>
                    <p>🔒 Site seguro e verificado</p>
                    <p>✅ Certificado de confiança</p>
                </div>
            </div>

            {/* Direitos Reservados */}
            <div className="footer-bottom">
                <p>
                    © 2024 Consultoria Física - Todos os direitos reservados. CNPJ: 00.000.000/0001-00 <br />
                    Endereço: Rua Exemplo, 123 - São Paulo, SP, 00000-000
                </p>
            </div>
        </footer>
    );
};

export default Footer;
