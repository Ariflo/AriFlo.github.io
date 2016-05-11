exports.up = function(knex, Promise) {
    	return knex.schema.createTable('admin', function(table){
		table.increments(); //create id SERIAL PRIMARY KEY
		table.string('admin_login');
		table.string('admin_pw');
	});
};

exports.down = function(knex, Promise) {
  	return knex.schema.dropTable('admin'); 
};