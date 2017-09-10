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





module.exports = router;
