const Controller = require('./Controller.js');
const pessoaServices = require('../services/PessoaServices.js');

const pessoServies = new pessoaServices();

class PessoaController extends Controller{
  constructor(){
    super(pessoaServices);
  }
}


module.exports = PessoaController;