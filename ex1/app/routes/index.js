var express = require('express');
var router = express.Router();
var Contratos = require("../controllers/contratos")

router.get('/contratos', async function(req, res, next) {
  var body
  if (req.query.entidade){
    body = await Contratos.getContratoByEntidade(req.query.entidade)
  } else if (req.query.tipo){
    body  = await Contratos.getContratoByTipo(req.query.tipo)
  } else{
    body = await Contratos.getContratos()
  }
  res.json(body)
});

router.get('/contratos/:id', async function(req, res, next) {
  contratos = await Contratos.getContratoById(req.params.id)
  res.json(contratos)
});

router.get('/contratos/entidades', async function(req, res, next) {
  entidades = await Contratos.getEntidades()
  console.log(entidades)
  res.json(entidades)
});

router.get('/contratos/tipos', async function(req, res, next) {
  tipos = await Contratos.getTipos()
  console.log(tipos)
  res.json(tipos)
});

router.post('/contratos', async function(req, res, next) {
  answer = await Contratos.addContrato(req.body)
  res.json(answer)
});

router.delete('/contratos/:id', async function(req, res, next) {
  answer = await Contratos.deleteContrato(req.params.id)
  res.json(answer)
});

router.put('/contratos/:id', async function(req, res, next) {
  answer = await Contratos.updatePeriodo(req.params.id)
  res.json(answer)
});

module.exports = router;
