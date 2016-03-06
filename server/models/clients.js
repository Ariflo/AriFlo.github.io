var  knex = require('../../db/knex');

// getting all clients
var Clients = function(){
  return knex('clients');
}


module.exports = {
  AllClients: Clients
}
