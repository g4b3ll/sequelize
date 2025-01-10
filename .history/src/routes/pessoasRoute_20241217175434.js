const { Router } = require('express');
const PessoaController = require('../controllers/PessoasController.js');

const router = Router();

router.get('/pessoas', PessoaController.pegaTodas);

module.exports = router;