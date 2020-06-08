'use strict';

var response = require('../response/res');
var connection = require('../conection/conn');
//var hbs = require('./hbs');


exports.vista = function(req, res) {
  let query =  connection.query('SELECT * FROM ingreso_usuarios1_1',
   (error, result)=>{
        if(error){
            console.log(error)
        } else{
             res.render('vista',{result : result})}
    });
};


exports.cancionesMas = function(req, res) {
    let query =connection.query('SELECT * FROM canciones_mas_escuchadas1_1', 
    (error, result)=>{
        if(error){
            console.log(error)
        } else{
            res.render('vistaCancionesMas',{result : result})
        }
    });
};

exports.cancionesGenero = function(req, res) {
   let query= connection.query('SELECT * FROM canciones_genero', 
    (error, result)=>{
        if(error){
            console.log(error)
        } else{
            res.render('vistaCancionesGenero',{result : result})
        }
    });
};
exports.index = function(req, res) {
    response.ok("Hello from the Node JS RESTful side!", res)
};

