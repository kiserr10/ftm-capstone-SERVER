
exports.up = function(knex, Promise) {
	return knex.schema.createTable('market', (table) =>{
		table.increments('id').primary();
		table.integer('location_id').unsigned();
		table.foreign('location_id').references('location.id').onDelete('cascade');
		table.text('description').notNull();
		table.text('name').notNull();
		table.text('image_url');
		table.float('rating');
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('market');
};
