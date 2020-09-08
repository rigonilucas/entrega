const cliente= require('./cliente');
const { response } = require('express');

module.exports={
    async listaEntregas (request,response){
        const clientes= await cliente.find();

        return response.json(clientes);
    },
    async armazena(request, response){
        const {name, dataEntrega, pontoPartida, pontoDestino} = request.body;

        let clientes = await cliente.findOne( { name } );

        


            clientes = await cliente.create({
                name,
                dataEntrega,
                pontoPartida,
                pontoDestino,
            })
        
        return response.json(clientes);
    }   
}

