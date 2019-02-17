var mysql = require('mysql2');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "nodedb"
});

/*con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO users (name) VALUES ('Michelle')";
  var values = [
    ['John'],
    ['Peter'],
    ['Amy'],
    ['Hannah'],
    ['Michael'],
    ['Sandy']
  ];
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted, ID: " + result.insertId);
  });
});*/

/*con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT id,name FROM users", function (err, result, fields) {
    if (err) throw err;
    console.log(JSON.stringify(result));
  });
});*/

var name = 'Arjun';
var id = 2;
var sql = 'SELECT * FROM users WHERE id = ? OR name = ?';
con.query(sql, [mysql.escape(id), mysql.escape(name)], function (err, result) {
  if (err) throw err;
  console.log(result);
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM users WHERE name LIKE 'A%'", function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});