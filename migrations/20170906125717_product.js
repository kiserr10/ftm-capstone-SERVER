
exports.up = function(knex, Promise) {
	return knex.schema.createTable('product', (table) => {
		table.increments('id').primary();
		table.text('name').notNull();
		table.text('description').notNull();
		table.text('image_url').notNull();
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('product');
};
