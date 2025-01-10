const database= require('../models')

class PessoaController {
  static async pegaTodas(req, res) {
    try {
      await const listaDePessoas = database.Pessoa.findAll();
      return listaDePessoas 
    } catch (erro) {
      //erro
    }
  }
}


module.exports = PessoaController;