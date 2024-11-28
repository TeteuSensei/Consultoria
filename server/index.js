const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Rotas
app.get('/', (req, res) => {
    res.send('Bem-vindo ao servidor Node.js');
});

app.get('/api/data', (req, res) => {
    res.json({ message: 'Olá do servidor!', data: [1, 2, 3, 4, 5] });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
