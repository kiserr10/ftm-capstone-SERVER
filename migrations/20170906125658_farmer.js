
exports.up = function(knex, Promise) {
	return knex.schema.createTable('farmer', (table) => {
		table.increments('id').primary();
		table.integer('user_id').unsigned();
		table.foreign('user_id').references('id').inTable('user').onDelete('cascade');
		table.text('biography').notNull();
		table.text('farm_name').notNull();
		table.text('image_url');
		table.float('rating').unsigned();
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('farmer');
};
