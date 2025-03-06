import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/Menu.css";

const Menu = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Verifica se há um usuário autenticado no localStorage
    const storedUser = JSON.parse(localStorage.getItem("loggedUser"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("loggedUser");
    localStorage.setItem("isAuthenticated", "false");
    setUser(null);
    navigate("/login");
  };

  return (
    <header className="menu">
      <div className="menu-container">
        {/* Logo */}
        <div className="menu-logo">
          <Link to="/">
            <img src="./Imagens/Logo/lwa.webp" alt="Logo" className="menu-logo-img" />
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
          {user ? (
            <div className="user-menu">
              <Link to="/dashboard" className="menu-icon">👤 {user.username}</Link>
              <button onClick={handleLogout} className="logout-button">Sair</button>
            </div>
          ) : (
            <Link to="/login" className="menu-icon">👤 Login</Link>
          )}
          <Link to="/carrinho" className="menu-icon">🛒(0)</Link>
        </div>
      </div>
    </header>
  );
};

export default Menu;
