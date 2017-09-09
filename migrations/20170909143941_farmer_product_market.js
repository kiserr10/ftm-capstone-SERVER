exports.up = function(knex, Promise) {
	return knex.schema.createTable('farmer_product_market', (table) =>{
		table.increments('id').primary();
		table.integer('farmer_product_id').unsigned();
		table.foreign('farmer_product_id').references('id').inTable('farmer_product').onDelete('cascade');
		table.integer('market_id').unsigned();
		table.foreign('market_id').references('id').inTable('market').onDelete('cascade');
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('farmer_product_market');
};
