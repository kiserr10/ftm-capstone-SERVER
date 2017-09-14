const bcrypt = require('bcrypt');

exports.seed = function(knex, Promise) {
	return knex.raw('TRUNCATE account CASCADE; ALTER SEQUENCE account_id_seq restart with 6')
		.then(function () {
			return knex('account').insert([
				{
					id: 1,
					first_name: 'Ross',
					last_name: 'Kiser',
					email: 'kiserr10@gmail.com',
					password: bcrypt.hashSync('Password123', 8)
				},
				{
					id: 2,
					first_name: 'Samuel',
					last_name: 'Waller',
					email: 'wingit@hotmail.com',
					password: bcrypt.hashSync('rossyKiser10', 8)
				},
				{
					id: 3,
					first_name: 'John',
					last_name: 'Deere',
					email: 'deerej@gmail.com',
					password: bcrypt.hashSync('alrightAlright1010', 8)
				},
				{
					id: 4,
					first_name: 'Matt',
					last_name: 'Holter',
					email: 'mholter10@yahoo.com',
					password: bcrypt.hashSync('climbguymusicguy23', 8)
				},
				{
					id: 5,
					first_name: 'Joseph',
					last_name: 'Teller',
					email: 'jteller@gmail.com',
					password: bcrypt.hashSync('Password45667', 8)
				}
			]);
		});
};
