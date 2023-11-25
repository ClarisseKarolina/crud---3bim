const express = require('express');
const router = express.Router();
const Controller_usuario = require('../controller/Controller_usuario');

router.post('/cadastro', Controller_usuario.createUsuario);
router.post('/login', Controller_usuario.loginUsuario);

module.exports = router;


//rota para o Controller usuário