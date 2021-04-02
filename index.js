const express = require('express')
const routes = require('./server/routes/index')
const app = express()
const port = process.env.PORT || 3000;


app.use((req, res,  next) => {
  res.status(202).send({
    mensagem: 'Okayy, deu certo'
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})