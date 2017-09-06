
exports.up = function(knex, Promise) {
	return knex.schema.createTable('farmer_product', (table) =>{
		table.increments('id').primary();
		table.integer('farmer_id').unsigned();
		table.foreign('farmer_id').references('id').inTable('farmer').onDelete('cascade');
		table.integer('product_id').unsigned();
		table.foreign('product_id').references('id').inTable('product').onDelete('cascade');
		table.integer('quantity').notNull();
		table.float('rating');
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('farmer_product');
};
