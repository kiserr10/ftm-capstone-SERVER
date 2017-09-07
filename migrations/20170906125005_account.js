
exports.up = function(knex, Promise) {
	return knex.schema.createTable('account', (table) => {
		table.increments('id').primary();
		table.text('first_name').notNull();
		table.text('last_name').notNull();
		table.text('email').notNull();
		table.text('password').notNull();
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('account');
};
