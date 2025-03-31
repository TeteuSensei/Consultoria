import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3001/api/login", {
        email,
        senha,
      });

      const { token, usuario } = response.data;
      
      // Armazena o token no localStorage para futuras requisições
      localStorage.setItem("token", token);
      localStorage.setItem("usuario", JSON.stringify(usuario));

      setMensagem("Login bem-sucedido! Redirecionando...");
      
      // Redirecionar para a página principal após o login
      setTimeout(() => {
        window.location.href = "/dashboard"; // Altere para a rota correta da sua aplicação
      }, 1500);
    } catch (error) {
      setMensagem("Erro ao fazer login. Verifique suas credenciais.");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          required
        />
        <button type="submit">Entrar</button>
      </form>
      {mensagem && <p>{mensagem}</p>}
    </div>
  );
};

export default Login;
