const hbs = require('hbs');
var path = require('path');
var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    bodyParser = require('body-parser'),
    controller = require('./controllers/controller');

//Configuring Express middleware for the handlebars
app.set('views', path.join(__dirname, '/views/'));
//app.engine('hbs', exphb({ extname: 'hbs', defaultLayout: 'mainLayout', layoutDir: __dirname + 'views/' }));
app.set('view engine', 'hbs');

app.use(express.static(__dirname + '/node_modules/bootstrap/dist'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./routes/routes');
routes(app);

app.listen(port);
console.log('Maria Fernanda Revelo, RESTful API server started on: ' + port);