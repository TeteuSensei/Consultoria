import React from "react";
import "../css/Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
        <p>&copy; 2024 Sua Consultoria Física. Todos os direitos reservados.</p>
        <div className="footer-links">
          <a href="#!">Política de Privacidade</a>
          <a href="#!">Termos de Uso</a>
          <a href="/contato">Contato</a>
        </div>
      </footer>
    );
};

export default Footer;
