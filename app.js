const express = require('express');
const app = express();
const PORT = 8000;

app.get('/', (req, res) => {
  res.send('¡Hola desde el servidor backend!');
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});