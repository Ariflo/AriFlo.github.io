var clients = require('./clientRoute');
var admin = require('./adminRoute');
var projects = require('./projectRoute');

module.exports = {
	clients:clients,
	admin: admin,
	projects: projects
};