const knex = require('./knex');
const bcrypt = require('bcrypt');

module.exports = {
	getUserByEmail: email => {
		return knex('account').where('email', email).first();
	},
	createNewAccount: account => {
		return knex('account').insert(account, 'id').then(ids => {
			return ids[0];
		});
	}
};
