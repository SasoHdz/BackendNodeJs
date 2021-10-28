const express = require('express');
const routerApi = require('./routes');

const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler');

const app = express();
const port = 3000;

app.use(express.json());

 app.get('/', (req, res) => {
  res.send('Hola mi server en express');
});

app.get('/nueva-ruta', (req, res) => {
  res.send('Hola soy una nueva ruta');
});

routerApi(app);

//Los midlewares de error siempre van despues del routerApi
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

//Cuida mucho el orden en que pones lo midlewares

app.listen(port, () => {
  console.log('Mi port' + port);
});
