var express = require('express');
var router = express.Router();

var mysql      = require('mysql');
var connection = mysql.createPool({
  host     : 'localhost',
  user     : 'root',//administrator
  password : '123456'
});
/* GET home page. */
router.post('/list', function(req, res, next) {
	
  	res.header('Access-Control-Allow-Origin',' *');
  	connection.query('SELECT * FROM fenye.fenye', function(err, rows, fields) {
  		res.send(rows)
  		
	});
});


router.post('/shuju', function(req, res, next) {
	var cc=req.body.uid;
	var aa=cc*2-2;
	console.log(aa)
  	res.header('Access-Control-Allow-Origin',' *');

		connection.query('SELECT * FROM fenye.fenye LIMIT '+aa+',2', function(err, rows, fields) {
			console.log(rows)
  			res.send(rows)
  		
		});
});

router.post('/shou', function(req, res, next) {
  	res.header('Access-Control-Allow-Origin',' *');

		connection.query('SELECT * FROM fenye.fenye LIMIT 0,2', function(err, rows, fields) {
  			res.send(rows)
  		
		});
});
module.exports = router;
