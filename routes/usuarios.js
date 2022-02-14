// Permite crear una instancia de router - para mannejar las rutas 
const { Router } = require('express');

// Controlador 
const { usuariosGet, usuariosPut, usuariosPost, usuariosDelete, usuariosPatch } = require('../controllers/usuarios');

const router = Router();


router.get('/', usuariosGet);

router.put('/:id', usuariosPut);

router.post('/', usuariosPost);

router.patch('/', usuariosPatch);

router.delete('/:id', usuariosDelete);

module.exports = router;