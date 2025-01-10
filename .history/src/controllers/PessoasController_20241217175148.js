const Controller = require('./Controller.js');
const pessoaServices = require('../services/PessoaServices.js');

const pessoServies = new pessoaServices();

class PessoaController extends Controller{
  constructor(){
    super(pessoaServices);
  }
  
  
  static async pegaTodas(req, res) {
    try {
      const listaDePessoas = await database.Pessoa.findAll();
      return res.status(200).send(listaDePessoas);
    } catch (erro) {
      //erro
    }
  }
}


module.exports = PessoaController;