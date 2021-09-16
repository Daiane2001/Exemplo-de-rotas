//nessa parte ficará só as rotas

const express = require('express'); //importando o express

const routes = express.Router(); /** componente 'routes', que vai receber do express o 'Router, assim vai gerenciar as rotas'*/

const controller = require('./controllers/controller');



//gerenciando rotas
routes.get('/', controller.raiz ); //disparando o controller raiz
routes.get('/produtos', controller.produtos ); //disparando o controller produtos
routes.get('/exemplo', controller.exemplo); //disparando o controller exemplo

module.exports = routes; //exportando o routes