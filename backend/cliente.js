const mongoose = require ('mongoose');

const EstruturaCliente = new mongoose.Schema({
    name: String,
    dataEntrega: String,
    pontoPartida: String,
    pontoDestino: String
})

module.exports = mongoose.model('Cliente', EstruturaCliente);