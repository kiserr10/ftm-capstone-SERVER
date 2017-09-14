const knex = require('./knex');
const bcrypt = require('bcrypt');

module.exports = {
	getUserByEmail: email => {
		return knex('accounts').where('email', email).first();
	},
	createNewAccount: account => {
		return knex('accounts').insert(account, 'id').then(ids => {
			return ids[0];
		});
	}
};
