const Contrato = require('../models/contrato');

// Lista todos os registros
module.exports.list = async () => {
  return await Contrato.find().exec();
}

// Retorna um registro pelo idcontrato
module.exports.findById = async (id) => {
  return await Contrato.findOne({ idcontrato: id }).exec();
}

// Retorna uma lista de contratos de acordo com a entidade_comunicante
module.exports.findByEntidade = async (entidade) => {
  return await Contrato.find({ entidade_comunicante: entidade }).exec();
}

// Retorna uma lista de contratos de acordo com o tipoprocedimento
module.exports.findByTipo = async (tipo) => {
  return await Contrato.find({ tipoprocedimento: tipo }).exec();
}

// Retorna uma lista de entidades comunicantes ordenada alfabeticamente e sem repetições
module.exports.listEntidades = async () => {
  return await Contrato.distinct('entidade_comunicante').sort();
}

// Retorna uma lista de tipos de procedimento ordenada alfabeticamente e sem repetições
module.exports.listTipos = async () => {
  return await Contrato.distinct('tipoprocedimento').sort();
}

// Insere um novo registro
module.exports.insert = async (contrato) => {
  return await Contrato.create(contrato);
}

// Remove um registro pelo idcontrato
module.exports.removeById = async (id) => {
  return await Contrato.deleteOne({ idcontrato: id }).exec();
}

// Atualiza um registro pelo idcontrato
module.exports.update = async (id, contrato) => {
  const result = await Contrato.updateOne({ idcontrato: id }, contrato).exec();
  if (result.nModified || result.modifiedCount) {
    return await Contrato.findOne({ idcontrato: id }).exec();
  } else if (result.matchedCount) {
    return { message: 'No changes made to the contract' };
  } else {
    return null;
  }
}
