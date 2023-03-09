'use strict'
var express=require('express');
var router=express.Router();
var tipoController=require('../controllers/tipo.controller');

// guardar tipo
router.post('/tipo',tipoController.guardarTipo);
// obtener tipo por nombre
router.get('/tipo/:nombre',tipoController.obtenerTipoPorNombre)
// obtener tipos
router.get('/tipo',tipoController.obtenerTipos);
// actualizar tipo por nombre
router.put('/tipo',tipoController.actualizarTipoPorNombre);
// eliminar tipo por nombre
router.delete('/tipo/:nombre',tipoController.eliminarTipoPorNombre);

module.exports=router;