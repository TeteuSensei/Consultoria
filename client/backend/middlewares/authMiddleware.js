const jwt = require("jsonwebtoken");

const autenticarToken = (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    return res.status(401).json({ error: "Acesso negado! Token não fornecido." });
  }

  try {
    const tokenFormatado = token.replace("Bearer ", ""); // Remove "Bearer " do token
    const decoded = jwt.verify(tokenFormatado, process.env.JWT_SECRET);
    req.usuario = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ error: "Token inválido!" });
  }
};

module.exports = autenticarToken;
