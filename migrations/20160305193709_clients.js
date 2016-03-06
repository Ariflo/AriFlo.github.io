exports.up = function(knex, Promise) {
    	return knex.schema.createTable('clients', function(table){
		table.increments(); //create id SERIAL PRIMARY KEY
		table.string('First Name');
		table.string('Last Name');
		table.string('Company');
		table.string('email');
		table.string('phone');
		table.text('message');
	});
};

exports.down = function(knex, Promise) {
  	return knex.schema.dropTable('clients'); 
};
