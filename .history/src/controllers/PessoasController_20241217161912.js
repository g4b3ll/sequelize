const database= require('../models');

class PessoaController {
  static async pegaTodas(req, res) {
    try {
      const listaDePessoas = await database.Pessoa.findAll();
      return listaDePessoas; 
    } catch (erro) {
      //erro
    }
  }
}


module.exports = PessoaController;