'use strict'
var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var usuarioSchema=Schema({
    nombres:String,
    apellidos:String,
    cedula:String,
    rol:String
});

module.exports=mongoose.model('Usuario',usuarioSchema);