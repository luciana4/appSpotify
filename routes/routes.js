'use strict';

module.exports = function(app) {
    var todoList = require('../controllers/controller');

    app.route('/')
        .get(todoList.index);

    app.route('/vistaUsuarios')
     .get(todoList.vista);
  
    app.route('/cancionesMas')
        .get(todoList.cancionesMas);

    app.route('/cancionesGenero')
        .get(todoList.cancionesGenero);

    app.route('/prueba/:nombre')
    .get(todoList.vistaParametro);

    app.route('/formulario')
    .get(todoList.formulario);

 	app.route('/procesar')
 	.post(todoList.procesar); 
};