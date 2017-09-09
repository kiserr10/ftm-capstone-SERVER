const express = require('express');
const router = express.Router();
const queries = require('../db/queries');

function isValid(req, res, next){
	if(!isNaN(req.params.id)) return next();
	next(new Error('Invalid Id!'));
}

router.get('/', (req, res) =>{
	queries.getAllFarmers().then(farmers =>{
		res.json(farmers);
	});
});

router.get('/:id', isValid, (req, res, next) => {
	queries.getOneFarmer(req.params.id).then(farmer =>{
		if(farmer){
			res.json(farmer);
		} else {
			next();
		}
	});
});




module.exports = router;
