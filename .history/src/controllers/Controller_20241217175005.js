class Controller {
  constructor(entidadeServices){
    this.entidadeServices = entidadeServices;
  }

  async pegaTodos(req, res){
    try {
      const listaDeRegistros = await this.entidadeServices.pegaTodosOsRegistros();
      return res.status(200).json(listaDeRegistros);
    } catch (erro) {
      //erro
    }
  }
}

module.exports = Controller;