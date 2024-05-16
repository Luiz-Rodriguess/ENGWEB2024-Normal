var Contrato = require("../models/contratos")

module.exports.getContratos = async() => {
    return await Contrato.find()
}

module.exports.getContratoById = async(id) => {
    return await Contrato.findOne({idcontrato:id})
}

module.exports.getContratoByEntidade = async(entidade) => {
    return await Contrato.find({NIPC_entidade_comunicante:entidade})
}

module.exports.getContratoByTipo = async(tipo) => {
    return await Contrato.find({tipoprocedimento:tipo})
}

module.exports.getEntidades = async() => {
    return await Contrato
            .find()
            .distinct("entidade_comunicante")
}

module.exports.getTipos = async() => {
    return await Contrato
            .find()
            .distinct("tipoprocedimento")
}

module.exports.addContrato = async(c) => {
    return Contrato.create(c)
}

module.exports.updateContrato = async(c) => {
    return await Contrato.updateOne({idcontrato:p.idcontrato}, c)
}

module.exports.deleteContrato = async(id) => {
    return await Contrato.deleteOne({idcontrato:id})
}