'use strict'
var fs=require('fs');
const path=require('path');
var Usuario=require('../models/usuario');
const session = require('express-session');

var controller={
    guardarUsuario:function(req,res){
        var usuario=new Usuario(req.body);
        Usuario.findOne({cedula:usuario.cedula})
        .then(resultFind=>{
            if (!resultFind){
                usuario.save()
                .then(result=>{
                    if(!result) return res.status(404).send({message:"No se han podido guardar los datos"});
                    return res.status(200).send({result});
                })
                .catch(err=>{
                    console.log(err);
                });
            }else{
                return res.status(200).send({message:'Este usuario ya existe'});
            }
        })
        .catch(err=>{
            console.log(err);
        });
        
    },
    obtenerUsuarioPorCedula:function(req,res){
        var cedulaBuscar=req.params.cedula;
        Usuario.findOne({cedula:cedulaBuscar})
        .then(result => {
            if (!result) return res.status(404).send({message:'No se encontraron datos con los valores proporcionados'});
            return res.status(200).send({result});
        })
        .catch(err => {
            console.log(err);
        });
    },
    obtenerUsuarios:function(req,res){
        Usuario.find({}).sort().exec()
        .then(result => {
            if (!result) return res.status(404).send({message:'No se encontraron datos'});
            return res.status(200).send({result});
        })
        .catch(err => {
            console.log(err);
        });
    },
    actualizarUsuarioPorCedula:function(req,res){
        var usuario=req.body;
        Usuario.findOneAndUpdate({cedula:usuario.cedula},usuario,{new:true})
        .then(result => {
            if (!result) return res.status(404).send({message:'No se han podido actualizar los datos'});
            return res.status(200).send({result});
        })
        .catch(err => {
            console.log(err);
        });
    },
    eliminarUsuarioPorCedula:function(req,res){
        var cedulaBuscar=req.params.cedula;
        Usuario.findOneAndDelete({cedula:cedulaBuscar})
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