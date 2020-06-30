'use strict';

var response = require('../response/res');
var connection = require('../conection/conn');
var connectionClasic = require('../conection/connClasic');
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
    response.ok("Hello from the Node JS RESTful side! MFR", res)
};


exports.prueba = function prueba(req, res){
    if(req.params.nombre){
        var nombre = req.params.nombre;
    }else{
        var nombre  = "sin nombre";
    }

    res.status(200).send(
        {
            //cualquier dato u objeto
            datos: [2, 5 ,4 ,6],
    message: "hola mundo nodejs and express "
    + nombre});
};

exports.vistaParametro = function vista(req, res){
    if(req.params.nombre){
        var nombre = req.params.nombre;
    }else{
        var nombre  = "sin nombre";
    }

    let query =connection.query('SELECT * FROM canciones_mas_escuchadas1_1 where nombre_artista  = ? ',  nombre, 
    (error, result)=>{
        if(error){
            console.log(error)
        } else{
            res.status(200).send({result : result})
             //  response.ok("Hello from the Node JS RESTful side!", res)
        }
    });
//};
    
    //res.status(200).send(
      //  res.json(query);
    //{result : JSON.stringify(query)});

      /*  {
            //cualquier dato u objeto
            query:query,
            datos: [2, 5 ,4 ,6],
    message: "hola mundo nodejs and express "
    + nombre});*/

};
 
exports.formulario = function formulario(req, res){

  var html = '<form action="/procesar" method="POST">'+
    '<input type="hidden" name="oculto" val="campo oculto pero no invisible!">'+
    '<div>'+
        '<label for="campoNombre">Elegir el cliente: </label>'+
            '<input type="text" id="campoNombre" name="nombre">'+
   '</div>'+
    '<div>'+
        '<button type="submit">Enviar</button>'+
    '</div>'+
'</form>';
              
    res.send(html);


    };


exports.procesar = function(req, res){
  var nombre = req.body.nombre;

  let query =connectionClasic.query('SELECT * FROM ProductoMasVendido where Clientes  = ? ',  nombre, 
    (error, result)=>{
        if(error){
            console.log(error)
        } else{
            res.status(200).send({result : result})
             //  response.ok("Hello from the Node JS RESTful side!", res)
        }
    });

};