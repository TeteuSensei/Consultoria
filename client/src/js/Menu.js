import React from "react";
import { Link } from "react-router-dom";
import "../css/Menu.css";

const Menu = () => {
    const handleSearch = (event) => {
        event.preventDefault();
        const searchQuery = event.target.elements.search.value;
        alert(`Você pesquisou por: ${searchQuery}`);
    };

    return (
        <header className="menu">
            <div className="menu-container">
                {/* Logo */}
                <div className="menu-logo">
                    <Link to="/">Consultoria Física</Link>
                </div>

                {/* Barra de Pesquisa */}
                <form className="menu-search" onSubmit={handleSearch}>
                    <input
                        type="text"
                        name="search"
                        placeholder="O que você está procurando?"
                        className="search-input"
                    />
                    <button type="submit" className="search-button">
                        🔍
                    </button>
                </form>

                {/* Links e Ícones */}
                <div className="menu-icons">
                    <Link to="/favoritos" className="menu-icon">⭐ Favoritos</Link>
                    <Link to="/conta" className="menu-icon">👤 Minha Conta</Link>
                    <Link to="/carrinho" className="menu-icon">🛒 Carrinho (0)</Link>
                </div>
            </div>

            {/* Links de Navegação */}
            <nav className="menu-navigation">
                <Link to="/">Home</Link>
                <Link to="/consultoria">Consultoria</Link>
                <Link to="/loja">Loja</Link>
                <Link to="/videos">Treinamento</Link>
                <Link to="/videos">Vídeos</Link>
                <Link to="/contato">Contato</Link>
            </nav>
        </header>
    );
};

export default Menu;
