var express = require('express');
var router = express.Router();
var locus = require("locus");

var clients = require('../models/clients')

router.post('/', function(req,res) {
	clients.AllClients().insert({
				     First_Name: req.body.firstName, 
				     Last_Name: req.body.lastName, 
				     email: req.body.email, 
				     phone: req.body.phone, 
				     message: req.body.message, 
				 }).then(function(){
				 	
				 })
});

module.exports = router;