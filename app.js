const express = require('express');
const app = express();
const produtosRoute = require('./src/routes/produtos');

app.use(produtosRoute);

app.listen(3000, ()=>{
    console.log('Servidor rodando na porta 3000');
});