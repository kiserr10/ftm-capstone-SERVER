const express = require('express');
const router = express.Router();
const Account = require('../models/Account');
const knex = require('../db/knex');

router.get('/', function(req, res, next) {
	Account
		.query()
		.eager()
		.then(accounts => {
			res.json(accounts);
		});
});
router.get('/:id', function(req, res, next) {
	Account
		.query()
		.findById(req.params.id)
		.eager()
		.then(accounts => {
			res.json(accounts);
		});
});





module.exports = router;
