const express = require('express')

const app = express()
const port = process.env.PORT || 3000;

const rotaProdutos = require('../SAP005-burger-queen-api/routes/produtos');
const rotaPedidos = require('../SAP005-burger-queen-api/routes/pedidos');

app.use('/produtos', rotaProdutos);
app.use('/pedidos', rotaPedidos);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})