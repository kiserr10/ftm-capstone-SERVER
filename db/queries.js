const knex = require('./knex'); // the connection! do this for all files where queries take place!!

module.exports = {

	getAllFarmers(){
		return knex('farmer');
	},

	getOneFarmer(id){
		return knex('farmer').where('id', id).first();
	}

};
