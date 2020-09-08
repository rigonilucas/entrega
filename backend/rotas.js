const {Router} = require('express');
const rotas = Router();
const controlecliente = require('./controleCliente');

rotas.post('/clientes', controlecliente.armazena);
rotas.get('/procura', controlecliente.listaEntregas);
module.exports=rotas;