const express = require('express');
const cors = require('cors');
const app = express();

const Router_produto = require('./src/routes/Router_produto');
const Router_auth = require('./src/routes/Router_auth');
const Router_usuario = require('./src/routes/Router_usuario');

app.use(express.json());
app.use(cors());

app.use('/', Router_produto);
app.use('/', Router_auth);
app.use('/', Router_usuario);

app.listen(3000, () => {
  console.log('servidor rodando na porta 3000');
});