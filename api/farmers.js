const express = require('express');
const router = express.Router();
const Farmer = require('../models/Farmer');
const knex = require('../db/knex');

router.get('/', function(req, res, next) {
	Farmer
		.query()
		.eager('[products, markets]')
		.then(farmers => {
			res.json(farmers);
		});
});




module.exports = router;
