const express = require('express');
const router = express.Router();
const Farmer = require('../models/Farmer');
const knex = require('../db/knex');

router.get('/', function(req, res, next) {
	Farmer
		.query()
		.eager('[account, products, markets, farmer_product]')
		.then(farmers => {
			res.json(farmers);
		});
});

router.get('/:id', function(req, res, next) {
	Farmer
		.query()
		.findById(req.params.id)
		.eager('[account, products, markets, farmer_product]')
		.then(farmers => {
			res.json(farmers);
		});
});

router.post('/', (req, res) =>{
	const options = {
		relate: true,
		unrelate: true
	};
	Farmer
		.query()
		.upsertGraph(req.body, options)
		.then(result => res.json(result)
		);
});





module.exports = router;
