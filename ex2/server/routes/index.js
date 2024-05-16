var express = require('express');
var router = express.Router();
var axios = require("axios")

router.get('/', function(req, res, next) {
  axios.get("http://localhost:16000/contratos")
    .then( (resp) =>{
      res.render('main', {listaDeContratos : resp.data });
    }).catch(erro => console.log(erro))
});

router.get('/:id', function(req, res, next) {
  axios.get("http://localhost:16000/contratos/"+req.params.id)
    .then( (resp) =>{
      res.render('contrato', {contrato : resp.data });
    }).catch(erro => console.log(erro))
});

router.get('/entidades/:id', function(req, res, next) {
  axios.get("http://localhost:16000/contratos?entidade="+req.params.id)
    .then( (resp) =>{
      var preco 
      resp.data.forEach((dic) =>{
        preco += parseFloat(dic.precoContratual)
      })
      res.render('entidade', {listaDeContratos : resp.data,id:req.params.id,preco:preco});
    }).catch(erro => console.log(erro))
});

module.exports = router;
