const express = require('express')
const app = express()
const port = process.env.PORT || 3000;
const morgan = require('morgan');
const bodyParser = require('body-parser');

const rotaProdutos = require('../SAP005-burger-queen-api/routes/produtos');
const rotaPedidos = require('../SAP005-burger-queen-api/routes/pedidos');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header('Acces-Control-Allow-Origin', '*');
  res.header(
    'Acces-Control-Allow-Header',
    'Origin, X-Requerested-With, Content-Type, Accept, Authorization'
  );

  if (req.method === 'OPTIONS') {
    res.header('Acces-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET')
    return res.status(200).send({});
  }

  next();
})

app.use('/produtos', rotaProdutos);
app.use('/pedidos', rotaPedidos);

//Quando n encontra a rota:
app.use((req, res, next) => {
  const erro = new Error('Não encontrado');
  erro.status = 404;
  next(erro);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  return res.send({
    erro: {
      mensagem: error.message
    }
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})