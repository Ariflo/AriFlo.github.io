exports.up = function(knex, Promise) {
    	return knex.schema.createTable('tech', function(table){
		table.increments(); //create id SERIAL PRIMARY KEY
		table.string('tech');
		table.integer('project_id').references('id').inTable('projects'); 
	});
};

exports.down = function(knex, Promise) {
  	return knex.schema.dropTable('tech'); 
};
