var  knex = require('../../db/knex');

// getting all clients
var Admin = function(){
  return knex('admin');
}


module.exports = {
  onlyAdmin: Admin
}