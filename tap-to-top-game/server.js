// server.js
const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Servir les fichiers statiques (assets, html, js)
app.use(express.static(path.join(__dirname, 'public')));

// Route principale pour afficher l'index
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Serveur lancé sur http://localhost:${port}`);
});
