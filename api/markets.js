const express = require('express');
const router = express.Router();
const Market = require('../models/Market');
const knex = require('../db/knex');

router.get('/', function(req, res, next) {
	Market
		.query()
		.eager('[farmers, farmer_product]')
		.then(markets => {
			res.json(markets);
		});
});
router.get('/:id', function(req, res, next) {
	Market
		.query()
		.findById(req.parmas.id)
		.eager('[farmers, farmer_product]')
		.then(markets => {
			res.json(markets);
		});
});






module.exports = router;
