var express = require('express');
var router = express.Router();
var partners = require('../models/dancepartner.js');

router.get('/', function(req,res) {
		res.redirect('/')
});

router.get('/allpartners', function(req,res) {
	
	partners.all(function(partner_data){
		res.render('index', {partner_data});
	});
});

router.post('/allpartners/create', function(req, res) {
	partners.create(req.body.username, function(result){
		console.log(result);
		res.redirect('/');
	});
});

router.put('/allpartners/update', function(req,res){
	partners.update(req.body.allpartners_id, function(result){
		console.log(result);
		res.redirect('/');
	});
});

module.exports = router;