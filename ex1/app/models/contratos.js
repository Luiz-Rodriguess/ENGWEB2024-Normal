const mongoose = require('mongoose')

var contratosSchema = new mongoose.Schema({
    idcontrato : {type:String},
    nAnuncio : {type:String},
    tipoprocedimento : {type:String},
    objectoContrato : {type:String},
    dataPublicacao : {type:String},
    dataCelebracaoContrato : {type:String},
    precoContratual : {type:String},
    prazoExecucao : {type:String},
    NIPC_entidade_comunicante : {type:String},
    entidade_comunicante : {type:String},
    fundamentacao : {type:String}
})

module.exports = mongoose.model('Contratos',contratosSchema,"contratos")