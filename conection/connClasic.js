var mysql = require('mysql');

var con = mysql.createConnection({
 host: "172.17.0.1",
 //host: "134.209.197.83",
  user: "root",
  password: "mafer.revelo99",
  database: "classicmodels"
});

con.connect(function (err){
    if(err) throw err;
});

module.exports = con;