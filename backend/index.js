const express = require('express');
const mongoose= require('mongoose');
const cors = require('cors');
const rotas = require('./rotas');
const app = express();
mongoose.connect('mongodb+srv://desafio:desafio@cluster0.sdzki.mongodb.net/desafio?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(cors());
app.use(express.json());
app.use(rotas);

app.listen(process.env.PORT || 4444);