exports.up = function(knex, Promise) {
	return knex.schema.createTable('market', (table) =>{
		table.increments('id').primary();
		table.text('name').notNull();
		table.text('description').notNull();
		table.text('city').notNull();
		table.text('state').notNull();
		table.text('image_url');
		table.float('rating');
		table.integer('farmer_product_id').unsigned();
		table.foreign('farmer_product_id').references('id').inTable('farmer_product').onDelete('cascade');

	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('market');
};
