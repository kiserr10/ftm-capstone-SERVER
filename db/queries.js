const knex = require('./knex'); // the connection! do this for all files where queries take place!!
const Farmer = require('../models/farmer');

module.exports = {

	getAllFarmers(){
		return knex('farmer');
	},
	getOneFarmer(id){
		return knex('farmer').where('id', id).first();
	}
};
