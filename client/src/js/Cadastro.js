import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Cadastro.css"; // Importa o arquivo CSS para estilização

const Cadastro = () => {
  // Estado para armazenar os dados de entrada do usuário
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userType, setUserType] = useState("Aluno");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Função para lidar com o cadastro
  const handleCadastro = (e) => {
    e.preventDefault();

    // Verifica se as senhas coincidem
    if (password !== confirmPassword) {
      setError("As senhas não coincidem!");
      return;
    }

    // Obtém usuários cadastrados e verifica se o e-mail já existe
    const users = JSON.parse(localStorage.getItem("users")) || [];
    if (users.some(user => user.email === email)) {
      setError("E-mail já cadastrado!");
      return;
    }

    // Cria um novo usuário
    const newUser = { name, username, email, password, userType };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    
    // Redireciona para a tela de login
    navigate("/login");
  };

  return (
    <div className="login-container">
      <h2>Cadastro</h2>
      <form onSubmit={handleCadastro}>
        <label>Nome Completo:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        
        <label>Usuário:</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
        
        <label>E-mail:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        
        <label>Senha:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        
        <label>Confirmar Senha:</label>
        <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
        
        <label>Tipo de Usuário:</label>
        <select value={userType} onChange={(e) => setUserType(e.target.value)}>
          <option value="Aluno">Aluno</option>
          <option value="Instrutor">Instrutor</option>
        </select>
        
        <button type="submit">Cadastrar</button>
      </form>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default Cadastro;