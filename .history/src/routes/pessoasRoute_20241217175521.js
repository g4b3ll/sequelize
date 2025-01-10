const { Router } = require('express');
const PessoaController = require('../controllers/PessoasController.js');

const pessoaController = new PessoaController();

const router = Router();

router.get('/pessoas', PessoaController);

module.exports = router;