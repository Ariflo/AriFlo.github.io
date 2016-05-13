var express = require('express');
var router = express.Router();
var locus = require("locus");
var project = require('../models/projects');

router.post('/', function(req,res) {
	eval(locus);

	// {
	//   tech: [ 'HTML5', 'CSS', 'Javascript' ],
	//   title: 'Intro to CSS and Javascript - Pixel Art Maker',
	//   image: 'images/pixel-art-maker.png',
	//   vid: 'https://www.youtube.com/watch?v=rQrjmAL0gFw',
	//   description: 'A simple point and click web application that allows users to create pixelated works of art',
	//   duties: 'Build entire stack',
	//   buildTime: '1 day' 
	// }
	// project.allProjects().insert({
	// 	project_title: req.body.title,
	// 	project_description: req.body.description,
	// 	project_img: req.body.image,
	// 	project_vid: req.body.vid,
	// 	build_time: req.body.buildTime,
	// 	duties: req.body.duties
	// }).returning('id').then(function(id){
	// 	knex('tech').insert({
	// 		for(var i = 0; i<req.body.tech; i++){
	// 			tech: req.body.tech[i];
	// 			project_id: id;
	// 		}
	// 	})
	// 	// knex('team').insert({
	// 	// 	for(var i = 0; i<req.body.team; i++){
	// 	// 		tech: req.body.tech[i];
	// 	// 		project_id: id;
	// 	// 	}
	// 	// 	name:
	// 	// })

	// })

});

module.exports = router;