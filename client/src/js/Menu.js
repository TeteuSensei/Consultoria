import React from "react";
import { Link } from "react-router-dom";
import "../css/Menu.css";

const Menu = () => {
    return (
        <header className="menu">
            <div className="menu-container">
                {/* Logo */}
                <div className="menu-logo">
                    <Link to="/">
                        <img
                            src="./Imagens/Logo/lwa.webp"
                            alt="Logo"
                            className="menu-logo-img"
                        />
                    </Link>
                </div>

                {/* Links de Navegação */}
                <nav className="menu-navigation">
                    <Link to="/consultoria" className="menu-link">Consultoria</Link>
                    <Link to="/treinamento" className="menu-link">Treinos</Link>
                    <Link to="/loja" className="menu-link">Loja</Link>
                </nav>

                {/* Ícones de Redes Sociais e Funcionalidades */}
                <div className="menu-icons">
                    <Link to="/conta" className="menu-icon">👤 Minha Conta</Link>
                    <Link to="/carrinho" className="menu-icon">🛒(0)</Link>
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-youtube menu-social-icon"></i>
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-instagram menu-social-icon"></i>
                    </a>
                    <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-whatsapp menu-social-icon"></i>
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Menu;
