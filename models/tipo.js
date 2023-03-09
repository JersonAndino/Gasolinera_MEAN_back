'use strict'
var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var tipoSchema=Schema({
    nombre:String,
    precio_litro:Number
});

module.exports=mongoose.model('Tipo',tipoSchema);