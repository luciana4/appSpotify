var mysql = require('mysql');

var con = mysql.createConnection({
  host: "172.17.0.2",
 //host: "134.209.197.83",
  user: "root",
  password: "root",
  database: "Spotify1"
});

con.connect(function (err){
    if(err) throw err;
});

module.exports = con;