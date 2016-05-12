var express = require('express');
var router = express.Router();
var locus = require("locus");
var project = require('../models/projects');

router.post('/', function(req,res) {
	eval(locus);
});

module.exports = router;