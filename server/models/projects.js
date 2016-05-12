var  knex = require('../../db/knex');

// getting all clients
var Projects = function(){
  return knex('projects');
}


module.exports = {
  allProjects: Projects
}