var express = require('express');
var router = express.Router();
var locus = require("locus");
var project = require('../models/projects');
var  knex = require('../../db/knex');

//Add project to database
router.post('/', function(req,res) {

	project.allProjects().insert({
		project_title: req.body.title,
		project_description: req.body.description,
		project_img: req.body.image,
		project_vid: req.body.vid,
		build_time: req.body.buildTime,
		duties: req.body.duties

	}).returning('id').then(function(id){
		req.body.tech.forEach(function(tech){
			knex('tech').insert({
				tech: tech,
				project_id: id[0]
			}).then(function(done){
				return done;
			})
		})	

		if(Object.keys(req.body.team).length !== 0 && req.body.team.constructor === Object){
			
			for(var member in req.body.team ){
				
				knex('team').insert({
					name: req.body.team[member][0],
					link: req.body.team[member][1],
					project_id: id[0]
				}).then(function(done){
					return done;
				})
			}
		}else{
			return done;	
		}

	}).catch(function(err){
	    res.json({
	        error: JSON.stringify(err),
	        message: "Error connecting to Database"
	    })
	});
});

//get project from database
router.get('/:id', function(req, res){
	project.allProjects().where({id: req.params.id}).first().then(function(project){

		knex('tech').where({project_id: req.params.id}).then(function(tech){
			knex('team').where({project_id: req.params.id}).then(function(team){
				res.json({project:project, tech:tech, team:team});
			})
		})

	}).catch(function(err){
		    res.json({
		        error: JSON.stringify(err),
		        message: "Error connecting to Database"
		    })
	});
})

module.exports = router;