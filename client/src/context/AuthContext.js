import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(null);

  // Carregar usuário salvo no localStorage
  useEffect(() => {
    const usuarioSalvo = localStorage.getItem("usuario");
    if (usuarioSalvo) {
      setUsuario(JSON.parse(usuarioSalvo));
    }
  }, []);

  const login = async (email, senha) => {
    try {
      const response = await axios.post("http://localhost:3001/api/login", { email, senha });
      const { token, usuario } = response.data;

      // Armazena os dados no localStorage
      localStorage.setItem("token", token);
      localStorage.setItem("usuario", JSON.stringify(usuario));

      setUsuario(usuario);

      return { sucesso: true };
    } catch (error) {
      return { sucesso: false, mensagem: "Credenciais inválidas." };
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("usuario");
    setUsuario(null);
  };

  return (
    <AuthContext.Provider value={{ usuario, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
