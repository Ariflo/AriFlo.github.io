exports.up = function(knex, Promise) {
    	return knex.schema.createTable('projects', function(table){
		table.increments(); //create id SERIAL PRIMARY KEY
		table.string('project_title');
		table.text('project_description');
		table.string('project_img');
		table.string('project_vid');
		table.string('build_time');
		table.string('duties');
	});
};

exports.down = function(knex, Promise) {
  	return knex.schema.dropTable('projects'); 
};