const express = require('express');
const router = express.Router();
const Controller_produto = require('../controller/Controller_produto');

router.get('/produtos', Controller_produto.getProdutos);
router.get('/produtos/nome/', Controller_produto.getProdutosByName);
router.get('/produtos/:id', Controller_produto.getProdutoById);
router.post('/produtos', Controller_produto.createProduto);
router.put('/produtos/:id', Controller_produto.updateProduto);
router.delete('/produtos/:id', Controller_produto.deleteProduto);

module.exports = router;

//rota para o Controller Produto