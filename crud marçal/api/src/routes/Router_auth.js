const express = require('express');
const router = express.Router();
const Controller_auth = require('../controller/Controller_auth');

router.post('/login', Controller_auth.login);

module.exports = router;

//rota para o Controller auth
