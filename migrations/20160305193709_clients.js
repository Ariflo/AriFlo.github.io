exports.up = function(knex, Promise) {
    	return knex.schema.createTable('clients', function(table){
		table.increments(); //create id SERIAL PRIMARY KEY
		table.string('First_Name');
		table.string('Last_Name');
		table.string('Company');
		table.string('email');
		table.string('phone');
		table.text('message');
	});
};

exports.down = function(knex, Promise) {
  	return knex.schema.dropTable('clients'); 
};
