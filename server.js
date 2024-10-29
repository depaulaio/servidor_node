const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); // Para parsear JSON no corpo das requisições

app.get('/', (req, res) => {
    res.send('Teste!');
});

// Rota de exemplo
app.get('/api', (req, res) => {
    res.json({ message: 'Esta é a API!' });
});


// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
