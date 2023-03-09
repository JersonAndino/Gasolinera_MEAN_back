'use strict'
var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var ventaSchema=Schema({
    cedula:String,
    tipo:String,
    total:String,
    fecha:Date
});

module.exports=mongoose.model('Venta',ventaSchema);