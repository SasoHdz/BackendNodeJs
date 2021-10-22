const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hola mi server en express');
});

app.get('/nueva-ruta', (req, res) => {
  res.send('Hola soy una nueva ruta');
});

app.get('/products', (req, res) => {
  res.json({
    name: 'Producto1',
    precio: 123
  });
});

app.listen(port, () => {
  console.log('Mi port' + port);
});
