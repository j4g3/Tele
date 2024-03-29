const express = require('express');

const routes = express.Router();

const Usuario = require ('./controllers/usuarios.controller')

routes.get('/',Usuario.index);

routes.post('/api/usuario',Usuario.create);
routes.post('/api/usuarios',Usuario.index);
routes.get('/api/usuarios.details/:_id',Usuario.details);
routes.delete('/api/usuarios/:_id',Usuario.delete);
routes.put('/api/usuarios',Usuario.update);



module.exports = routes;
