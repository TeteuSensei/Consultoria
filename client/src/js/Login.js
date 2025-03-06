import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Obtém os usuários do localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
      // Salva o usuário logado no localStorage
      localStorage.setItem("loggedUser", JSON.stringify(user));
      localStorage.setItem("isAuthenticated", "true");

      // Redireciona para o Dashboard
      navigate("/dashboard");
    } else {
      setError("Usuário ou senha incorretos");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <label>Usuário:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <label>Senha:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Entrar</button>
      </form>
      {error && <p className="error">{error}</p>}
      <div className="login-links">
        <button onClick={() => navigate("/cadastro")} className="secondary-button">Cadastrar</button>
        <button onClick={() => navigate("/recuperar-senha")} className="secondary-button">Esqueci a Senha</button>
      </div>
    </div>
  );
};

export default Login;
