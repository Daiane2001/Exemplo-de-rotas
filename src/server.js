const express = require('express'); //importando o express
const routes = require('./routes'); // Importando o routes


const app = express(); //dei o nome 'app' para minha aplicação e fiz ela receber o express
app.use(routes);//falando para a aplicação utilizar o routes.

app.listen(3333, ()=> console.log('Servidor ON - Rodando!')); //pegar a aplicação e pedir pra ela escutar a porta 3334