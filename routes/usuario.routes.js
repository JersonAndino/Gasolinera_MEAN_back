'use strict'
var express=require('express');
var router=express.Router();
var usuarioController=require('../controllers/usuario.controller');

// guardar usuario
router.post('/usuario',usuarioController.guardarUsuario);
// obtener usuario por cedula
router.get('/usuario/:cedula',usuarioController.obtenerUsuarioPorCedula);
// obtener usuarios
router.get('/usuario',usuarioController.obtenerUsuarios);
// actualizar usuario por cedula
router.put('/usuario',usuarioController.actualizarUsuarioPorCedula);
// eliminar usuario por cedula
router.delete('/usuario/:cedula',usuarioController.eliminarUsuarioPorCedula);

module.exports=router;