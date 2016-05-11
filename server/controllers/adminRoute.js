var express = require('express');
var router = express.Router();
var locus = require("locus");
var bcrypt = require('bcrypt');
var  jwt = require('jsonwebtoken');
var admin = require('../models/admin')

router.post('/', function(req,res) {
	 admin.onlyAdmin().where({admin_login: req.body.name}).first()
	.then(function(admin){
		if(admin){
			var pass = req.body.password;
			bcrypt.compare(pass, admin.admin_pw, function(err, result){
				if(result){
					var jsonToken = jwt.sign({ id: admin.id }, "victoria");
					res.json({jwt:jsonToken});
				}else{
					res.json({
			            		error: JSON.stringify(err),
			            		message: "no matching admin/password combo"
				        	});
				}
			});
		}else{
			res.json({ error: JSON.stringify(err),
	            		    message: "no matching admin/password combo" });
		}

	}).catch(function(err){
	    res.json({
	        error: JSON.stringify(err),
	        message: "Error connecting to Database"
	    })
	});

	//to use for admin sign-up
	// bcrypt.genSalt(10, function(err, salt){
	//       bcrypt.hash(req.body.password, salt, function(err, hash){
	// 	      admin.onlyAdmin().insert({
	// 				     admin_login: req.body.name, 
	// 				     admin_pw: hash
	// 				 }).returning('id').then(function(id){

	// 		       var jsonToken = jwt.sign({id: id,
	// 			        	               }, "victoria");

	// 		       res.json({jwt:jsonToken, id: id});
	// 		      });
	// 	    });
	// }).catch(function(err){
	//         console.log(err);
	//         res.json({
	//             error: JSON.stringify(err),
	//             message: "Error connecting to Database"
	//         })
 //    	});
});

module.exports = router;