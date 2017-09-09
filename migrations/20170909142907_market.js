exports.up = function(knex, Promise) {
	return knex.schema.createTable('market', (table) =>{
		table.increments('id').primary();
		table.text('name').notNull();
		table.text('address').notNull();
		table.text('description').notNull();
		table.text('schedule');
		table.text('google_map_link');
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('market');
};
