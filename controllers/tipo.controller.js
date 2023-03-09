'use strict'
var fs=require('fs');
const path=require('path');
var Tipo=require('../models/tipo');
const session = require('express-session');

var controller={
    guardarTipo:function(req,res){
        var tipo=new Tipo(req.body);
        Tipo.findOne({nombre:tipo.nombre})
        .then(resultFind=>{
            if (!resultFind){
                tipo.save()
                .then(result=>{
                    if(!result) return res.status(404).send({message:"No se han podido guardar los datos"});
                    return res.status(200).send({result});
                })
                .catch(err=>{
                    console.log(err);
                });
            }else{
                return res.status(200).send({message:'Este tipo ya existe'});
            }
        })
        .catch(err=>{
            console.log(err);
        });
        
    },
    obtenerTipoPorNombre:function(req,res){
        var nombreBuscar=req.params.nombre;
        Tipo.findOne({nombre:nombreBuscar})
        .then(result => {
            if (!result) return res.status(404).send({message:'No se encontraron datos con los valores proporcionados'});
            return res.status(200).send({result});
        })
        .catch(err => {
            console.log(err);
        });
    },
    obtenerTipos:function(req,res){
        Tipo.find({}).sort().exec()
        .then(result => {
            if (!result) return res.status(404).send({message:'No se encontraron datos'});
            return res.status(200).send({result});
        })
        .catch(err => {
            console.log(err);
        });
    },
    actualizarTipoPorNombre:function(req,res){
        var tipo=req.body;
        Tipo.findOneAndUpdate({nombre:tipo.nombre},tipo,{new:true})
        .then(result => {
            if (!result) return res.status(404).send({message:'No se han podido actualizar los datos'});
            return res.status(200).send({result});
        })
        .catch(err => {
            console.log(err);
        });
    },
    eliminarTipoPorNombre:function(req,res){
        var nombreBuscar=req.params.nombre;
        Tipo.findOneAndDelete({nombre:nombreBuscar})
        .then(result => {
            if (!result) return res.status(404).send({message:'No se pudo eliminar el registro'});
            return res.status(200).send({result});
        })
        .catch(err => {
            console.log(err);
        });
    }
}

module.exports=controller;