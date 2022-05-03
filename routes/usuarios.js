
const { Router } = require('express');

const {usuariosGet,
     usuariosDelete,
     usuariosPatch,
     usuariosPut, 
     usuariosPost} = require('../controllers/usuarios');


const routes = Router();

routes.get('/', usuariosGet);

routes.post('/', usuariosPost);

routes.put('/:id', usuariosPut);

routes.patch('/', usuariosPatch);

routes.delete('/', usuariosDelete);

module.exports =  routes;