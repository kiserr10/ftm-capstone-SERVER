
exports.up = function(knex, Promise) {
	return knex.schema.createTable('farmer', (table) => {
		table.increments('id').primary();
		table.integer('account_id').unsigned();
		table.foreign('account_id').references('id').inTable('account').onDelete('cascade');
		table.text('biography').notNull();
		table.text('farm_name').notNull();
		table.text('image_url');
		table.float('rating').unsigned();
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('farmer');
};
