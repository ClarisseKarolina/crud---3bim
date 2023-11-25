const produtoModel = require('../models/produtoModel');

//aba de controller sobre os produtos do CRUD
class Controller_produto {
  async getProdutos(req, res) {
    try {
      const produtos = await produtoModel.getProdutos();
      res.json(produtos);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: error.message });
    }
  }

  async getProdutosByName(req, res) {
    const nome = req.query.nome;
    try {
      const produtos = await produtoModel.getProdutosByName(nome);
      return res.json(produtos);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: error.message });
    }
  }

  async getProdutoById(req, res) {
    try {
      const produto = await produtoModel.getProdutoById(req.params.id);
  
      if (!produto) {
        return res.status(404).json({ error: 'Produto não encontrado' });
      }
  
      res.status(200).json(produto);
    } catch (error) {
      console.error('Erro ao obter detalhes do produto:', error);
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  }
  

  //parte do CRUD
  async createProduto(req, res) {
    const { nome, valor, categoria, quantidade } = req.body;

    try {
      const produto = await produtoModel.createProduto(nome, valor, categoria, quantidade);
      res.status(201).json(produto);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: error.message });
    }
  }

  async updateProduto(req, res) {
    const { id } = req.params;
    const { nome, valor, categoria, quantidade } = req.body;

    try {
      const produto = await produtoModel.updateProduto(id, nome, valor, categoria, quantidade);
      res.json(produto);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: error.message });
    }
  }

  async excluirProduto(req, res) {
    const { id } = req.params;

    try {
      const produto = await produtoModel.excluirProduto(id);
      res.json(produto);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new Controller_produto();